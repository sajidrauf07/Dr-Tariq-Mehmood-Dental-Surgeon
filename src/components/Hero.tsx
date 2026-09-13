"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Calendar, MessageCircle, Star, MapPin, CheckCircle2, ShieldCheck, Heart } from "lucide-react";

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section
      id="home"
      className="relative pt-24 pb-14 md:pt-36 md:pb-24 overflow-hidden subtle-mesh"
    >
      {/* Background soft decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-200/40 dark:bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-100/50 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Call To Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Badge / Location */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              <span>Serving Patients in Mianwali</span>
              <span className="text-sky-400 dark:text-sky-600">•</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                Civil Lines
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-5 sm:mb-6">
              Professional Dental Care in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-sky-400 dark:to-cyan-300">
                Mianwali
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              {siteConfig.subheadline} Led by {siteConfig.doctorName} ({siteConfig.designation}), delivering gentle, conservative treatment in a comfortable clinic environment.
            </p>

            {/* Google Rating Verified Chip */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 p-3 mb-6 sm:mb-8 bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs w-full sm:w-auto">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/40 text-amber-400"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {siteConfig.googleRating.score} / {siteConfig.googleRating.maxScore}
              </div>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Based on <span className="font-semibold text-slate-800 dark:text-slate-200">{siteConfig.googleRating.reviewCount} Google Reviews</span>
              </div>
              <a
                href={siteConfig.googleRating.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline underline-offset-2 ml-auto"
              >
                View on Google
              </a>
            </div>

            {/* Primary & Secondary Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenAppointmentModal}
                id="hero-book-appointment-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 shadow-lg shadow-sky-600/25 transition-all hover:shadow-xl hover:shadow-sky-600/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                id="hero-call-now-btn"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600 dark:text-sky-400" />
                <span>Call {siteConfig.contact.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/80 transition-all"
                title="Chat with clinic on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Guarantees / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-slate-800 w-full text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Hygienic Sterilization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Comfortable Care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Clear Guidance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Trust Overlay Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
                <Image
                  src="/images/doctor.jpg"
                  alt="Dr. Tariq Mehmood Dental Surgeon - Clinic Care"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-semibold tracking-wide flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    Dr. Tariq Mehmood Dental Surgeon
                  </div>
                  <p className="text-xs text-slate-200">
                    Sumbal Shaheed Road, Civil Lines, Mianwali
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Gentle Experience */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">Patient-Centered</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Gentle & Caring</div>
                </div>
              </div>

              {/* Floating Badge 2: Modern Clinic */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">Strict Sterilization</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Hygienic Standards</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
