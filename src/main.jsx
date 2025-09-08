import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from "react-helmet-async";
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</HelmetProvider>
  </StrictMode>,
)
