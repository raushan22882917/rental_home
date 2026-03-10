# Realtical — Premium Real Estate Marketing Agency Website

## Overview
A complete, multi-page premium website for Realtical, a real estate marketing agency that helps builders and developers generate high-quality property leads.

## Architecture
- **Frontend**: React + TypeScript + Vite + TailwindCSS + shadcn/ui
- **Backend**: Express.js (Node.js)
- **Routing**: Wouter (SPA)
- **State**: TanStack Query
- **Forms**: react-hook-form + zodResolver
- **Storage**: In-memory (MemStorage)

## Pages
| Route | Page |
|---|---|
| `/` | Homepage (hero, services, stats, process, testimonials, blog preview, CTA) |
| `/about` | About Realtical (story, team, values, timeline) |
| `/services` | Services + Pricing (6 services, 3 pricing tiers) |
| `/case-studies` | Case Studies/Portfolio (4 detailed case studies) |
| `/blog` | Blog/Insights (6 articles, search + filter) |
| `/contact` | Contact page with contact form |
| `/lead-capture` | Lead generation landing page (two-panel, dark theme) |

## Components
- `client/src/components/navbar.tsx` — Fixed navbar with scroll-aware styling
- `client/src/components/footer.tsx` — Full-featured footer
- `client/src/components/whatsapp-button.tsx` — Floating WhatsApp CTA

## Backend API
- `POST /api/leads` — Submit a lead capture form
- `GET /api/leads` — List all leads
- `POST /api/contact` — Submit a contact message

## Design System
- **Primary**: Gold (#c4921f / hsl 38 68% 44%) — luxury accent
- **Secondary**: Deep Navy (#0d1b38) — brand primary dark
- **Background**: Off-white (hsl 40 20% 98%)
- **Font Heading**: Playfair Display (serif)
- **Font Body**: Plus Jakarta Sans
- Custom CSS classes: `.gold-gradient`, `.navy-gradient`, `.bg-navy`, `.text-gold`

## Key Features
- Premium luxury dark navy + gold color scheme
- Fully responsive (mobile-first)
- Lead capture form with project type, budget selectors
- Contact form with success state
- WhatsApp floating button with pre-filled message
- SEO meta tags and Open Graph tags
- Conversion-optimized landing page (/lead-capture)
