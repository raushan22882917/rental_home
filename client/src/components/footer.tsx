import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const services = [
  "Real Estate Lead Generation",
  "Meta Ads Management",
  "Google Ads Management",
  "Landing Page Design",
  "CRM Setup & Integration",
  "Digital Marketing Strategy",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">R</span>
              </div>
              <span className="text-2xl font-bold font-serif tracking-tight">Realtical</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              India's premier real estate marketing agency, helping builders and developers generate high-quality property leads through data-driven digital marketing.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  data-testid={`link-social-${label.toLowerCase()}`}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#c4921f] flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#e8b84b] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services">
                    <span className="text-white/60 hover:text-[#e8b84b] text-sm transition-colors cursor-pointer">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#e8b84b] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>
                    <span
                      data-testid={`link-footer-${label.toLowerCase().replace(" ", "-")}`}
                      className="text-white/60 hover:text-[#e8b84b] text-sm transition-colors cursor-pointer"
                    >
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#e8b84b] mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#e8b84b] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#e8b84b] shrink-0" />
                <a
                  href="tel:+919876543210"
                  data-testid="link-footer-phone"
                  className="text-white/60 hover:text-[#e8b84b] text-sm transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#e8b84b] shrink-0" />
                <a
                  href="mailto:hello@realtical.com"
                  data-testid="link-footer-email"
                  className="text-white/60 hover:text-[#e8b84b] text-sm transition-colors"
                >
                  hello@realtical.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Realtical. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
