"use client";

import React from "react";
import { ServiceItem, siteConfig } from "@/config/siteConfig";
import { X, Calendar, CheckCircle, ShieldCheck } from "lucide-react";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            {service.category}
          </span>
          {service.isPopular && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              Frequently Requested
            </span>
          )}
        </div>

        {/* Service Title */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          {service.name}
        </h3>

        {/* Overview */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Procedure highlights */}
        <div className="bg-slate-50 dark:bg-slate-800/70 rounded-2xl p-4 border border-slate-200/70 dark:border-slate-700 mb-6 space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            Clinic Standard
          </div>
          <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span>Sterilized instruments and safe clinical hygiene protocols</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span>Clinical examination prior to commencing any dental procedure</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span>Gentle techniques tailored to patient comfort and pain reduction</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => {
              onBookService(service.name);
              onClose();
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Request Appointment</span>
          </button>
          
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hello Dr. Tariq Mehmood, I would like to inquire about ${service.name} in Mianwali.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800 transition-colors"
          >
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
