import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default("gen_random_uuid()"),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const leads = pgTable("leads", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company"),
  projectType: text("project_type"),
  budget: text("budget"),
  message: text("message"),
  source: text("source").default("website"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
