import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleContact } from "./routes/contact";

export function createServer() {
  const app = express();

  const fallbackOrigins = ["http://localhost:5173", "http://localhost:8080"];
  const allowedOrigins = (process.env.CORS_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  const corsOptions = {
    origin: allowedOrigins.length > 0 ? allowedOrigins : fallbackOrigins,
    optionsSuccessStatus: 200,
  };

  // Middleware
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContact);

  return app;
}
