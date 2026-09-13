import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Phone, MessageCircle, Calendar, Bot } from "lucide-react";

interface MobileBottomBarProps {
  onOpenAppointmentModal: () => void;
  onOpenChatbot: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenAppointmentModal,
  onOpenChatbot,
}) => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        
        {/* CALL */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 text-slate-800 dark:text-slate-200 transition-all border border-slate-200/60 dark:border-slate-700"
          aria-label="Call clinic directly"
        >
          <Phone className="w-4 h-4 text-sky-600 dark:text-sky-400 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 active:scale-95 text-emerald-800 dark:text-emerald-300 transition-all border border-emerald-200 dark:border-emerald-800/80"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">WHATSAPP</span>
        </a>

        {/* CHATBOT / AI ASSISTANT */}
        <button
          onClick={onOpenChatbot}
          type="button"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 active:scale-95 text-cyan-800 dark:text-cyan-300 transition-all border border-cyan-200 dark:border-cyan-800/80"
          aria-label="Open Dental Assistant Chatbot"
        >
          <Bot className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">CHATBOT</span>
        </button>

        {/* BOOK APPOINTMENT */}
        <button
          onClick={onOpenAppointmentModal}
          type="button"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 active:scale-95 text-white transition-all shadow-xs"
          aria-label="Open appointment booking form"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">BOOK</span>
        </button>

      </div>
    </div>
  );
};
