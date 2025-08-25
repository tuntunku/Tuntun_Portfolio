import path from "path";
import express from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend from dist/client
app.use(express.static(path.join(__dirname, "client")));

// Handle React routing (SPA)
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});
