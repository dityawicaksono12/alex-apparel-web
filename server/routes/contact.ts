import { RequestHandler } from "express";
import { ContactRequest, ContactResponse } from "@shared/api";

export const handleContact: RequestHandler = (req, res) => {
  const { name, email, subject, message } = req.body as Partial<ContactRequest>;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // In a real app, send email or persist to a datastore here
  console.info("[contact] submission received", {
    name,
    email,
    subject,
    preview: `${String(message).slice(0, 120)}${String(message).length > 120 ? "…" : ""}`,
  });

  const response: ContactResponse = { status: "received" };
  return res.status(200).json(response);
};
