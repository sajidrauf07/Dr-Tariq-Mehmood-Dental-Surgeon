"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Calendar, Stethoscope, ClipboardList, HeartPulse } from "lucide-react";

export const PatientJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const icons = [
    <Calendar key="cal" className="w-5 h-5" />,
    <Stethoscope key="steth" className="w-5 h-5" />,
    <ClipboardList key="clip" className="w-5 h-5" />,
    <HeartPulse key="heart" className="w-5 h-5" />,
  ];

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
            Simple & Transparent
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your Dental Care Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A structured, 4-step clinical approach designed to keep you informed, comfortable, and confident at every phase.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {siteConfig.patientJourney.map((step, index) => (
            <div
              key={step.step}
              onClick={() => setActiveStep(index)}
              className={`cursor-pointer rounded-3xl p-5 sm:p-6 transition-all duration-300 border ${
                activeStep === index
                  ? "bg-white dark:bg-slate-800 border-sky-400 dark:border-sky-500 shadow-xl shadow-sky-600/10 -translate-y-1"
                  : "bg-white/80 dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-850 hover:border-slate-300"
              }`}
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span className={`text-2xl font-black ${
                  activeStep === index ? "text-sky-600 dark:text-sky-400" : "text-slate-300 dark:text-slate-700"
                }`}>
                  {step.step}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  activeStep === index
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                }`}>
                  {icons[index]}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>

              {/* Indicator bar */}
              <div className="mt-5 sm:mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-[11px] font-semibold">
                {activeStep === index ? (
                  <span className="text-sky-600 dark:text-sky-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400" />
                    Selected Phase
                  </span>
                ) : (
                  <span className="text-slate-400 dark:text-slate-500">Step {index + 1} of 4</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
