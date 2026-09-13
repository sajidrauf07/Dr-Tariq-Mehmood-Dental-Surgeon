import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dr. Tariq Mehmood on WhatsApp"
      className="hidden sm:flex fixed bottom-8 left-6 z-40 items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:bg-emerald-700 hover:scale-105 transition-all duration-300 group border border-white/40"
    >
      <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
      <span className="text-xs font-bold tracking-wide">
        Chat on WhatsApp
      </span>
    </a>
  );
};
