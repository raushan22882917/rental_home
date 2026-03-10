import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHomePage = location === "/";
  const isDark = isHomePage && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : isHomePage
          ? "bg-transparent"
          : "bg-white shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">R</span>
              </div>
              <span
                className={`text-2xl font-bold font-serif tracking-tight transition-colors ${
                  isDark ? "text-white" : "text-[#0d1b38]"
                }`}
              >
                Realtical
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer relative group ${
                    location === link.href
                      ? isDark
                        ? "text-[#e8b84b]"
                        : "text-primary"
                      : isDark
                      ? "text-white/90 hover:text-[#e8b84b]"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/lead-capture">
              <Button
                data-testid="button-strategy-call"
                className="gold-gradient text-white border-0 hover:opacity-90 font-semibold px-6 shadow-lg"
              >
                Get Free Strategy Call
              </Button>
            </Link>
          </div>

          <button
            data-testid="button-mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isDark ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/lead-capture">
                <Button
                  data-testid="button-mobile-strategy-call"
                  className="w-full gold-gradient text-white border-0 font-semibold"
                >
                  Get Free Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
