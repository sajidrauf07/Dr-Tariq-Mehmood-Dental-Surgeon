import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Phone, MessageCircle, Calendar, Sparkles, Heart } from "lucide-react";

interface FooterProps {
  onOpenAppointmentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointmentModal }) => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Clinic Branding & Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white">
                  {siteConfig.doctorName}
                </span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-sky-400">
                  {siteConfig.designation} • Mianwali
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Compassionate, professional dental care focusing on long-term oral health, ethical treatment guidance, and patient comfort in Civil Lines, Mianwali.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-sky-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  About Dr. Tariq Mehmood
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Dental Services
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-sky-400 transition-colors">
                  Featured Treatments
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-sky-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-400 transition-colors">
                  Reviews & Feedback
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Clinic Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Location & Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span>
                  {siteConfig.contact.address.street},<br />
                  {siteConfig.contact.address.neighborhood},<br />
                  {siteConfig.contact.address.city}, Pakistan
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-sky-400 transition-colors font-semibold"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Medical Disclaimer Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.clinicName}. All rights reserved.
          </p>
          <p className="text-center md:text-right max-w-lg">
            Medical Disclaimer: Content on this site is for educational purposes and does not substitute professional medical diagnosis. Treatment plans are finalized upon clinical consultation.
          </p>
        </div>

      </div>
    </footer>
  );
};
