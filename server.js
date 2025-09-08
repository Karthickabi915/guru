import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(__dirname)
async function createServer() {
  const app = express();
  
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'info'
  });
  
  // Use Vite's connect instance as middleware
  app.use(vite.middlewares);
  
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    
    try {
      // Get the index.html template
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      );
      
      // Apply Vite HTML transforms
      template = await vite.transformIndexHtml(url, template);
      
      // Load the server entry
      const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
      
      // Render the app HTML with meta data
      const { html, helmet } = await render(url);
      
      // Replace the placeholder with the rendered HTML and meta tags
      const responseHtml = template
        .replace('<!--ssr-outlet-->', html)
        .replace('<!--helmet-outlet-->', `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        `);
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(responseHtml);
    } catch (e) {
      // Fix stack trace for better debugging
      if (vite.ssrFixStacktrace) {
        vite.ssrFixStacktrace(e);
      }
      console.error('SSR Error:', e);
      res.status(500).end(e.message);
    }
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}

createServer().catch(console.error);





