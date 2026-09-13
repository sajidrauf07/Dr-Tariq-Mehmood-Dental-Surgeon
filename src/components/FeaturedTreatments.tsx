"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { CheckCircle2, AlertCircle, Calendar } from "lucide-react";

interface FeaturedTreatmentsProps {
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const FeaturedTreatments: React.FC<FeaturedTreatmentsProps> = ({
  onOpenAppointmentModal,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const treatment = siteConfig.featuredTreatments[activeTab];

  return (
    <section id="featured" className="py-20 bg-slate-50/80 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
            Focus Procedures
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Dental Treatments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Learn more about the most common oral health procedures provided at our Mianwali clinic, designed to relieve discomfort and restore natural dental function.
          </p>
        </div>

        {/* Treatment Tab Navigation */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 scrollbar-none">
          {siteConfig.featuredTreatments.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === idx
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Active Treatment Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200/80 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Treatment Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                <Image
                  src={treatment.image}
                  alt={`${treatment.title} at Dr. Tariq Mehmood Dental Clinic`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-sky-700 dark:text-sky-300 shadow-xs border border-slate-100 dark:border-slate-800">
                  {treatment.title}
                </div>
              </div>
            </div>

            {/* Treatment Content */}
            <div className="lg:col-span-7">
              <div className="mb-2 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                Clinical Overview
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {treatment.title}
              </h3>
              <p className="text-sm font-medium text-sky-800/90 dark:text-sky-300/90 mb-4">
                {treatment.subtitle}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {treatment.description}
              </p>

              {/* Two Column details: Benefits & When Needed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
                
                {/* Benefits */}
                <div className="bg-sky-50/50 dark:bg-sky-950/40 p-4 rounded-2xl border border-sky-100 dark:border-sky-900/60">
                  <h4 className="text-xs font-bold text-sky-950 dark:text-sky-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-sky-500 font-bold">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When You May Need It */}
                <div className="bg-amber-50/40 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/60">
                  <h4 className="text-xs font-bold text-amber-950 dark:text-amber-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    When You May Need It
                  </h4>
                  <ul className="space-y-2">
                    {treatment.whenNeeded.map((need, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenAppointmentModal(treatment.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-md hover:shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for {treatment.title}</span>
                </button>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span>Call {siteConfig.contact.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
