import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body as ContactFormData;
      
      // Validate form data
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real implementation, you would:
      // 1. Send an email using a service like nodemailer
      // 2. Store the contact submission in a database
      // 3. Send confirmation emails
      
      // For now, we'll just log the contact request
      console.log("Contact form submission received:", { name, email, phone, message });
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Thank you for your message. We'll get back to you soon."
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred processing your request. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
