import { type User, type InsertUser, type Lead, type InsertLead, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  createContactMessage(msg: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private leads: Map<string, Lead>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find((user) => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const lead: Lead = {
      ...insertLead,
      id,
      company: insertLead.company ?? null,
      projectType: insertLead.projectType ?? null,
      budget: insertLead.budget ?? null,
      message: insertLead.message ?? null,
      source: insertLead.source ?? "website",
      createdAt: new Date(),
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values()).sort(
      (a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0)
    );
  }

  async createContactMessage(insertMsg: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const msg: ContactMessage = {
      ...insertMsg,
      id,
      phone: insertMsg.phone ?? null,
      subject: insertMsg.subject ?? null,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, msg);
    return msg;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0)
    );
  }
}

export const storage = new MemStorage();
