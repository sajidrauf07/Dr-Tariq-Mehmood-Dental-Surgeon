"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import { X, Calendar, CheckCircle2, MessageCircle, Send, ShieldCheck } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = "",
}) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [service, setService] = useState(preselectedService || siteConfig.services[0].name);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setFullName("");
    setPhone("");
    setPreferredDate("");
    setPreferredTime("");
    setMessage("");
    onClose();
  };

  const whatsappAppointmentMsg = `Hello Dr. Tariq Mehmood, I submitted an appointment request:
- Name: ${fullName || "Patient"}
- Phone: ${phone || "Provided on call"}
- Service: ${service}
- Preferred Date: ${preferredDate || "Any available"}
- Preferred Time: ${preferredTime || "Evening"}
${message ? `- Note: ${message}` : ""}`;

  const directWhatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappAppointmentMsg
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
              <Calendar className="w-4 h-4" />
              <span>Dental Consultation Request</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Book an Appointment
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Complete the details below to request a dental visit with Dr. Tariq Mehmood in Civil Lines, Mianwali.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 sm:py-2.5 text-[16px] sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-slate-100"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0300 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 sm:py-2.5 text-[16px] sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-slate-100"
                />
              </div>

              {/* Service Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Service / Reason for Visit <span className="text-rose-500">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 sm:py-2.5 text-[16px] sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-slate-100"
                >
                  {siteConfig.services.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 sm:py-2.5 text-[16px] sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 sm:py-2.5 text-[16px] sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-slate-100"
                  >
                    <option value="">Select Time Slot</option>
                    <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM (Afternoon)</option>
                    <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM (Evening)</option>
                    <option value="07:00 PM - 09:00 PM">07:00 PM - 09:00 PM (Night)</option>
                  </select>
                </div>
              </div>

              {/* Message / Symptoms */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Message / Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your tooth pain or request..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 sm:py-2.5 text-[16px] sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-slate-100"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-appointment-request-btn"
                className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 shadow-md transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Request Appointment</span>
              </button>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Your information is handled with clinical confidentiality.</span>
              </div>

            </form>
          </div>
        ) : (
          /* Submission Feedback View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Request Received
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-md mx-auto">
              Thank you. Your appointment request has been received. The clinic will contact you to confirm your appointment time and availability.
            </p>

            {/* Quick WhatsApp option */}
            <div className="bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl p-4 border border-emerald-200 dark:border-emerald-800/80 text-left mb-6">
              <div className="text-xs font-bold text-emerald-900 dark:text-emerald-200 mb-1 flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Need immediate priority confirmation?</span>
              </div>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 mb-3">
                You can forward this request directly to Dr. Tariq Mehmood on WhatsApp now.
              </p>
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </a>
            </div>

            <button
              onClick={resetAndClose}
              className="py-2.5 px-6 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
