"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  Sparkles,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Calendar,
  Phone,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  Stethoscope,
  HelpCircle,
  RotateCcw
} from "lucide-react";

interface InteractiveSmileStudioProps {
  onOpenAppointmentModal: (serviceName?: string) => void;
}

interface SymptomOption {
  id: string;
  label: string;
  icon: string;
  category: string;
  urgency: "urgent" | "moderate" | "routine";
  urgencyText: string;
  recommendedService: string;
  clinicalGuidance: string;
  duration: string;
  comfortNote: string;
}

const symptomOptions: SymptomOption[] = [
  {
    id: "severe-pain",
    label: "Severe / Throbbing Toothache",
    icon: "⚡",
    category: "Emergency Care",
    urgency: "urgent",
    urgencyText: "Priority Same-Day Consultation Recommended",
    recommendedService: "Root Canal Treatment",
    clinicalGuidance: "Severe throbbing pain or night ache typically indicates inflammation or infection of the inner pulp. Dr. Tariq prioritizes conservative nerve treatment to relieve pain immediately while saving your natural tooth.",
    duration: "45 - 60 Minutes",
    comfortNote: "Gentle local anesthesia administered beforehand — zero pain during treatment.",
  },
  {
    id: "stains",
    label: "Yellow Teeth & Tartar Stains",
    icon: "✨",
    category: "Preventive & Hygiene",
    urgency: "routine",
    urgencyText: "Elective Hygiene Consultation",
    recommendedService: "Teeth Cleaning & Polishing",
    clinicalGuidance: "Calculus accumulation and extrinsic tea/tobacco stains cannot be brushed away at home. Ultrasonic scaling safely vibrates tartar away without eroding tooth enamel.",
    duration: "30 - 45 Minutes",
    comfortNote: "Mild vibration sensation, zero anesthesia required for most patients.",
  },
  {
    id: "cavity",
    label: "Cavity Hole or Food Catching",
    icon: "🕳️",
    category: "Restorative Care",
    urgency: "moderate",
    urgencyText: "Timely Consultation Recommended",
    recommendedService: "Dental Fillings",
    clinicalGuidance: "Food impaction and sensitivity to cold or sweets usually signify active enamel decay. Early composite restoration stops bacteria from reaching the dental nerve.",
    duration: "35 - 50 Minutes",
    comfortNote: "Painless procedure using durable, tooth-colored composite resin.",
  },
  {
    id: "bleeding-gums",
    label: "Bleeding or Swollen Gums",
    icon: "🩸",
    category: "Periodontal Care",
    urgency: "moderate",
    urgencyText: "Prompt Examination Advised",
    recommendedService: "Teeth Cleaning & Polishing",
    clinicalGuidance: "Bleeding during brushing is a primary sign of gingivitis caused by plaque buildup along the gumline. Professional ultrasonic hygiene stops progression toward bone loss.",
    duration: "30 - 45 Minutes",
    comfortNote: "Gentle subgingival rinse and oral hygiene instruction provided.",
  },
  {
    id: "broken-tooth",
    label: "Chipped or Fractured Tooth",
    icon: "🦷",
    category: "Structural Repair",
    urgency: "moderate",
    urgencyText: "Assessment Within 24-48 Hours",
    recommendedService: "Crowns & Bridges",
    clinicalGuidance: "A fractured cusp weakens the remaining tooth structure and may trap bacteria. Treatment involves aesthetic bonding or custom porcelain crown reinforcement.",
    duration: "1 - 2 Sessions",
    comfortNote: "Restores full natural chewing function and aesthetic contours.",
  },
  {
    id: "checkup",
    label: "Routine Checkup / No Symptoms",
    icon: "🔍",
    category: "Preventive Care",
    urgency: "routine",
    urgencyText: "Routine Preventative Appointment",
    recommendedService: "Consultation & Diagnostics",
    clinicalGuidance: "Bi-annual clinical examinations detect hidden interproximal decay and early gum changes before they cause discomfort or require complex procedures.",
    duration: "20 - 30 Minutes",
    comfortNote: "Thorough visual examination with transparent discussion of your oral health.",
  },
];

export const InteractiveSmileStudio: React.FC<InteractiveSmileStudioProps> = ({
  onOpenAppointmentModal,
}) => {
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>("severe-pain");
  const [durationSelect, setDurationSelect] = useState<"days" | "weeks" | "months">("days");

  const activeSymptom =
    symptomOptions.find((s) => s.id === selectedSymptomId) || symptomOptions[0];

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dr. Tariq Mehmood Dental Clinic. I completed the online symptom assessment for: ${activeSymptom.label}. I would like to consult regarding ${activeSymptom.recommendedService}.`
  )}`;

  return (
    <section
      id="symptom-checker"
      className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white dark:from-[#060D1A] dark:via-[#0A1830] dark:to-[#060D1A]"
    >
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-sky-200/30 dark:bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 dark:bg-sky-950/90 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-sky-200 dark:border-sky-800">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Interactive Care Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Select your current dental concern below for instant clinical recommendations and practical preparation advice before visiting Dr. Tariq Mehmood.
          </p>
        </div>

        {/* Studio Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step 1: Select Dental Concern (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-600 text-white text-[11px] font-bold">1</span>
                Select Your Main Dental Concern
              </span>
              <span className="text-xs text-slate-500">6 Options</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {symptomOptions.map((option) => {
                const isSelected = selectedSymptomId === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setSelectedSymptomId(option.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-white dark:bg-slate-800/95 border-sky-500 shadow-md shadow-sky-500/10 ring-2 ring-sky-500/20"
                        : "bg-white/70 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl shrink-0 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">{option.icon}</span>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          {option.label}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {option.category}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center">
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step 2: Duration Selector */}
            <div className="pt-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-600 text-white text-[11px] font-bold">2</span>
                How Long Have You Noticed This?
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "days", label: "1 - 3 Days (Recent)" },
                  { key: "weeks", label: "1 - 4 Weeks" },
                  { key: "months", label: "Months (Chronic)" },
                ].map((d) => (
                  <button
                    key={d.key}
                    onClick={() => setDurationSelect(d.key as any)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                      durationSelect === d.key
                        ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Instant Clinical Guidance (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xl relative overflow-hidden">
              
              {/* Top Accent Ribbon */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                  activeSymptom.urgency === "urgent"
                    ? "bg-red-100 dark:bg-red-950/70 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                    : activeSymptom.urgency === "moderate"
                    ? "bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
                    : "bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{activeSymptom.urgencyText}</span>
              </div>

              {/* Recommended Service Title */}
              <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-1">
                Recommended Primary Procedure
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                {activeSymptom.recommendedService}
              </h3>

              {/* Clinical Guidance Text */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
                {activeSymptom.clinicalGuidance}
              </p>

              {/* Key Quick Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    <Clock className="w-4 h-4 text-sky-500" />
                    <span>Typical Session Length</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {activeSymptom.duration}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Comfort & Pain Relief</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {activeSymptom.comfortNote}
                  </div>
                </div>
              </div>

              {/* Verified Care Guarantee */}
              <div className="mb-6 p-3 rounded-2xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200/70 dark:border-sky-800/60 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                <Stethoscope className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sky-900 dark:text-sky-200 font-semibold">Dr. Tariq's Conservative Philosophy: </strong>
                  Every procedure begins with a gentle examination. We only recommend treatments necessary to preserve your health and comfort.
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenAppointmentModal(activeSymptom.recommendedService)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book for {activeSymptom.recommendedService}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Ask Doctor on WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Direct Call</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
