import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    try {
      const data = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(data);
      res.json({ success: true, data: lead });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Internal server error" });
      }
    }
  });

  app.get("/api/leads", async (_req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json({ success: true, data: leads });
    } catch {
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.json({ success: true, data: message });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Internal server error" });
      }
    }
  });

  return httpServer;
}
