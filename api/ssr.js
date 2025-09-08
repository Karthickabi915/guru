import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

// Get __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load index.html template
let templateHtml;
try {
  templateHtml = fs.readFileSync(
    path.resolve(__dirname, "../dist/client/index.html"),
    "utf-8"
  );
} catch (err) {
  console.error("Failed to load template HTML:", err);
  templateHtml = `<!DOCTYPE html><html><head><title>Error</title></head><body><h1>Template not found</h1></body></html>`;
}

export default async function handler(req, res) {
  try {
    const url = req.url || "/";
    
    console.log("Processing URL:", url);
    console.log("Current directory:", __dirname);

    const entryServerPath = path.resolve(__dirname, "../dist/server/entry-server.js");
    console.log("Looking for entry-server at:", entryServerPath);

    if (!fs.existsSync(entryServerPath)) {
      console.error("entry-server.js not found at:", entryServerPath);
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 500;
      return res.end(`
        <h1>Server Error</h1>
        <p>entry-server.js not found at: ${entryServerPath}</p>
        <p>Available files in dist/server:</p>
        <pre>${fs.readdirSync(path.resolve(__dirname, "../dist/server"), { withFileTypes: true }).map(f => f.name).join('\n')}</pre>
      `);
    }

    // Dynamic import with file:// URL
    let render;
    try {
      const module = await import(pathToFileURL(entryServerPath).href);
      render = module.render || module.default?.render || module.default;

      if (!render || typeof render !== "function") {
        throw new Error(`render function not found. Available exports: ${Object.keys(module).join(', ')}`);
      }
    } catch (importErr) {
      console.error("Failed to import entry-server:", importErr);
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 500;
      return res.end(`
        <h1>Import Error</h1>
        <p>Failed to import entry-server.js: ${importErr.message}</p>
      `);
    }

    // Render React app
    const renderResult = await render(url);

    // Handle different return formats
    let html, helmet;
    if (typeof renderResult === "string") {
      html = renderResult;
      helmet = { title: { toString: () => "" }, meta: { toString: () => "" }, link: { toString: () => "" } };
    } else if (renderResult && typeof renderResult === "object") {
      html = renderResult.html || "";
      helmet = renderResult.helmet || { 
        title: { toString: () => "" }, 
        meta: { toString: () => "" }, 
        link: { toString: () => "" } 
      };
    } else {
      throw new Error("Invalid render result format");
    }

    const responseHtml = templateHtml
      .replace("<!--ssr-outlet-->", html)
      .replace("<!--helmet-outlet-->", `
        ${helmet.title?.toString() || ""}
        ${helmet.meta?.toString() || ""}
        ${helmet.link?.toString() || ""}
      `);

    // Send response
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.end(responseHtml);

  } catch (err) {
    console.error("SSR Error:", err);
    console.error("Error stack:", err.stack);

    res.setHeader("Content-Type", "text/html");
    res.statusCode = 500;
    res.end(`
      <!DOCTYPE html>
      <html>
        <head><title>Server Error</title></head>
        <body>
          <h1>Server Side Rendering Error</h1>
          <p>${err.message}</p>
          <pre>${err.stack}</pre>
          <p>${req.url}</p>
          <p>${renderResult.html}</p>
        </body>
      </html>
    `);
  }
}
