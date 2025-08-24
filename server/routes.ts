import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactFormEmail } from "./email";
import { messageStorage } from "./messageStorage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Basic validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "All fields are required" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: "Please provide a valid email address" 
        });
      }

      // Save message to storage (so you can always see it)
      const savedMessage = messageStorage.saveMessage({
        name,
        email,
        subject,
        message
      });

      // Try to send email (but don't fail if it doesn't work)
      const emailSent = await sendContactFormEmail({
        name,
        email,
        subject,
        message
      });

      // Always return success since we saved the message
      res.json({ 
        success: true, 
        message: "Message sent successfully! I'll get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  // API endpoint to get all messages (for you to view)
  app.get("/api/messages", (req, res) => {
    try {
      const messages = messageStorage.getAllMessages();
      const counts = messageStorage.getMessageCount();
      res.json({
        success: true,
        messages,
        counts
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ success: false, message: "Failed to fetch messages" });
    }
  });

  // API endpoint to mark message as read
  app.post("/api/messages/:id/read", (req, res) => {
    try {
      const { id } = req.params;
      const success = messageStorage.markAsRead(id);
      res.json({ success });
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({ success: false, message: "Failed to mark message as read" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
