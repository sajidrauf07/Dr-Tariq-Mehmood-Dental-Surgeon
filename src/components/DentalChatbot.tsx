"use client";

import React, { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Phone,
  MapPin,
  Calendar,
  AlertTriangle,
  ExternalLink,
  Sparkles,
  ChevronDown,
} from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
  options?: { label: string; action: string }[];
}

interface DentalChatbotProps {
  onOpenAppointmentModal: () => void;
  isOpenExternal?: boolean;
  onToggleExternal?: () => void;
}

export const DentalChatbot: React.FC<DentalChatbotProps> = ({
  onOpenAppointmentModal,
  isOpenExternal,
  onToggleExternal,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isOpenExternal !== undefined ? isOpenExternal : internalOpen;
  const toggleOpen = () => {
    if (onToggleExternal) {
      onToggleExternal();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: `Hello! I am Dr. Tariq Dental Assistant. How may I help you today with appointments, treatments, or clinic information in Mianwali?`,
      options: [
        { label: "📅 Book Appointment", action: "book" },
        { label: "🦷 Dental Services", action: "services" },
        { label: "📍 Clinic Location", action: "location" },
        { label: "⏰ Clinic Timings", action: "timings" },
        { label: "📞 Contact Doctor", action: "contact" },
        { label: "❓ Common FAQs", action: "faqs" },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleAction = (action: string) => {
    switch (action) {
      case "book":
        setMessages((prev) => [
          ...prev,
          { sender: "user", text: "I would like to book an appointment." },
          {
            sender: "bot",
            text: `You can request an appointment slot online, or message directly on WhatsApp for prompt scheduling.`,
            options: [
              { label: "Fill Appointment Form", action: "open_modal" },
              { label: "Message on WhatsApp", action: "open_whatsapp" },
            ],
          },
        ]);
        break;

      case "open_modal":
        toggleOpen();
        onOpenAppointmentModal();
        break;

      case "open_whatsapp":
        window.open(
          `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
            siteConfig.contact.whatsappDefaultMessage
          )}`,
          "_blank"
        );
        break;

      case "services":
        setMessages((prev) => [
          ...prev,
          { sender: "user", text: "What dental treatments do you provide?" },
          {
            sender: "bot",
            text: `Dr. Tariq Mehmood offers comprehensive dental treatments:
• Routine Checkups & Consultations
• Teeth Cleaning, Scaling & Polishing
• Tooth-Colored Composite Fillings
• Root Canal Treatment (Endodontics)
• Gentle Tooth Extractions & Wisdom Teeth
• Dental Crowns & Fixed Bridges
• Professional Teeth Whitening
• Children's Dental Care & Sensitivity Therapy`,
            options: [
              { label: "📅 Book Treatment", action: "book" },
              { label: "📞 Call Clinic", action: "contact" },
            ],
          },
        ]);
        break;

      case "location":
        setMessages((prev) => [
          ...prev,
          { sender: "user", text: "Where is the clinic located?" },
          {
            sender: "bot",
            text: `📍 Clinic Address:
${siteConfig.contact.address.street},
Civil Lines, Mianwali, Pakistan.
(Near the landmark NADRA Office).`,
            options: [
              { label: "🗺️ Open in Google Maps", action: "open_maps" },
              { label: "📞 Call 0300 4757123", action: "call_doctor" },
            ],
          },
        ]);
        break;

      case "open_maps":
        window.open(siteConfig.contact.googleMapsUrl, "_blank");
        break;

      case "timings":
        setMessages((prev) => [
          ...prev,
          { sender: "user", text: "What are the clinic consultation timings?" },
          {
            sender: "bot",
            text: `🕒 Clinic Hours:
• Monday - Saturday: 03:00 PM - 09:00 PM
• Sunday: Closed / By Prior Appointment

We advise calling ahead at 0300 4757123 to confirm your preferred slot.`,
            options: [
              { label: "📅 Book a Slot", action: "open_modal" },
              { label: "📞 Call to Confirm", action: "call_doctor" },
            ],
          },
        ]);
        break;

      case "contact":
        setMessages((prev) => [
          ...prev,
          { sender: "user", text: "How can I contact Dr. Tariq Mehmood?" },
          {
            sender: "bot",
            text: `You can reach the clinic directly:
• Phone: 0300 4757123
• WhatsApp: +92 300 4757123
• Address: Sumbal Shaheed Road, near NADRA Office, Civil Lines, Mianwali.`,
            options: [
              { label: "📞 Call 0300 4757123", action: "call_doctor" },
              { label: "💬 Chat on WhatsApp", action: "open_whatsapp" },
            ],
          },
        ]);
        break;

      case "call_doctor":
        window.location.href = `tel:${siteConfig.contact.phone}`;
        break;

      case "faqs":
        setMessages((prev) => [
          ...prev,
          { sender: "user", text: "What are common patient questions?" },
          {
            sender: "bot",
            text: `Common dental inquiries:
1. Does teeth cleaning hurt? (No, modern ultrasonic equipment is gentle)
2. What is a root canal? (A safe procedure to save an infected natural tooth)
3. How to book? (Submit our online form or call 0300 4757123)
4. Do you see children? (Yes, gentle pediatric dental care is provided)`,
            options: [
              { label: "📅 Request Appointment", action: "open_modal" },
              { label: "💬 Ask on WhatsApp", action: "open_whatsapp" },
            ],
          },
        ]);
        break;

      default:
        break;
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");

    const newMessages: Message[] = [...messages, { sender: "user", text: userText }];
    const lower = userText.toLowerCase();
    let botReply = "";
    let options: { label: string; action: string }[] | undefined = [
      { label: "📅 Book Appointment", action: "book" },
      { label: "📞 Call Clinic", action: "contact" },
    ];

    if (
      lower.includes("pain") ||
      lower.includes("bleed") ||
      lower.includes("swell") ||
      lower.includes("broken") ||
      lower.includes("emergency") ||
      lower.includes("dard")
    ) {
      botReply = `⚠️ Dental Health Notice: If you are experiencing acute toothache, severe facial swelling, or dental trauma, please visit Dr. Tariq Mehmood or an emergency medical clinic for an in-person clinical evaluation immediately. As an automated assistant, I cannot diagnose medical conditions or prescribe medicine.`;
      options = [
        { label: "📞 Call Clinic: 0300 4757123", action: "call_doctor" },
        { label: "💬 WhatsApp Emergency Triage", action: "open_whatsapp" },
      ];
    } else if (lower.includes("price") || lower.includes("cost") || lower.includes("fee")) {
      botReply = `Dental treatment fees vary depending on the procedure and individual clinical condition. Dr. Tariq Mehmood provides transparent guidance after examining your teeth in person. Would you like to schedule an initial consultation?`;
      options = [
        { label: "📅 Book Consultation", action: "open_modal" },
        { label: "📞 Inquire via Call", action: "call_doctor" },
      ];
    } else if (lower.includes("location") || lower.includes("where") || lower.includes("address")) {
      botReply = `Our clinic is located on Sumbal Shaheed Road, near NADRA Office, Civil Lines, Mianwali, Pakistan.`;
      options = [{ label: "🗺️ Get Directions", action: "open_maps" }];
    } else if (lower.includes("time") || lower.includes("timing") || lower.includes("open") || lower.includes("hours")) {
      botReply = `Consultation timings are typically Monday through Saturday from 03:00 PM to 09:00 PM. Call 0300 4757123 to confirm today's schedule.`;
      options = [
        { label: "📞 Call 0300 4757123", action: "call_doctor" },
        { label: "📅 Book Online", action: "open_modal" },
      ];
    } else {
      botReply = `Thank you for your question! As an automated assistant, I can help with clinic directions, services, and appointment bookings. For individual dental advice, Dr. Tariq Mehmood will examine you during consultation.`;
    }

    newMessages.push({ sender: "bot", text: botReply, options });
    setMessages(newMessages);
  };

  return (
    <>
      {/* Floating Chatbot Launch Button (Visible on desktop/tablet; on mobile triggered via bottom bar) */}
      <button
        onClick={toggleOpen}
        aria-label="Open Dr. Tariq Dental Assistant"
        className="hidden sm:flex fixed bottom-8 right-6 z-30 p-4 rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 items-center gap-2 group border-2 border-white/80 dark:border-slate-800"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <Bot className="w-6 h-6" />
            <span className="text-xs font-bold tracking-wide pr-1">
              Dental Assistant
            </span>
          </>
        )}
      </button>

      {/* Mobile backdrop overlay when chatbot is open */}
      {isOpen && (
        <div
          onClick={toggleOpen}
          className="sm:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 transition-opacity animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed inset-x-2 bottom-[68px] sm:inset-x-auto sm:bottom-24 sm:right-6 z-50 w-auto sm:w-[390px] h-[78vh] sm:h-[520px] max-h-[600px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Chatbot Header */}
          <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 dark:from-slate-950 dark:via-sky-950 dark:to-slate-950 p-3.5 sm:p-4 text-white flex items-center justify-between border-b border-sky-900/50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-xs shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold leading-tight">
                  Dr. Tariq Dental Assistant
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-sky-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online Clinic Guide • Mianwali</span>
                </div>
              </div>
            </div>

            <button
              onClick={toggleOpen}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Close chat window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Medical Safety Disclaimer Banner */}
          <div className="bg-amber-50 dark:bg-amber-950/50 px-3 py-1.5 border-b border-amber-200 dark:border-amber-900 text-[10px] text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Informational only. Non-diagnostic. Cannot prescribe medication.</span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 bg-slate-50/70 dark:bg-slate-950/70">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-sky-600 text-white rounded-br-none shadow-xs"
                      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700 rounded-bl-none shadow-xs"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* Optional Action Buttons */}
                {msg.options && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={() => handleAction(opt.action)}
                        className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-sky-700 dark:hover:text-sky-300 text-[11px] sm:text-xs font-medium border border-slate-200/80 dark:border-slate-700 shadow-xs transition-colors text-left"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-2.5 py-1.5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1 overflow-x-auto scrollbar-none text-[11px]">
            <button
              onClick={() => handleAction("book")}
              className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 whitespace-nowrap"
            >
              📅 Book
            </button>
            <button
              onClick={() => handleAction("services")}
              className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 whitespace-nowrap"
            >
              🦷 Services
            </button>
            <button
              onClick={() => handleAction("timings")}
              className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 whitespace-nowrap"
            >
              ⏰ Timings
            </button>
            <button
              onClick={() => handleAction("location")}
              className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 whitespace-nowrap"
            >
              📍 Location
            </button>
            <button
              onClick={() => handleAction("contact")}
              className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 whitespace-nowrap"
            >
              📞 Call
            </button>
          </div>

          {/* Input Box */}
          <form
            onSubmit={handleSend}
            className="p-2.5 sm:p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about dental services or timings..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2.5 sm:py-2 text-[16px] sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 dark:text-slate-100"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
