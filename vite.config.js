import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
   base: "/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        client: "./src/main.jsx",
        server: "./src/entry-server.jsx",
      },
    },
  },
  ssr: {
    noExternal: [
      // SEO
      "react-helmet-async",

      // Bootstrap + React Bootstrap deps
      "bootstrap",
      "countup.js",
      "react-bootstrap",
      "@restart/hooks",
      "dom-helpers",
      "react-transition-group",

      // Ant Design
      "antd",
      "@ant-design/cssinjs",

      // MUI
      "@mui/material",
      "@mui/icons-material",
      "@mui/lab",
      "@mui/system",
      "@mui/base",

      // Animations & Carousels
      "framer-motion",
      "react-slick",
      "slick-carousel",

      // Utilities
      "react-hot-toast",
      "react-countup",
      "react-icons",
      "react-phone-input-2",
    ],
  },
});
