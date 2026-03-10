import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "919876543210";
  const message = encodeURIComponent(
    "Hello! I'm interested in Realtical's real estate marketing services. Can you help me with lead generation for my project?"
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="button-whatsapp"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#1da851] transition-all hover:scale-105 active:scale-95 group"
    >
      <MessageCircle size={22} fill="white" stroke="none" />
      <span className="text-sm font-semibold hidden sm:block">Chat with us</span>
    </a>
  );
}
