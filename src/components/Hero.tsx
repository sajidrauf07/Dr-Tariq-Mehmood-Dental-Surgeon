"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import {
  Phone,
  Calendar,
  MessageCircle,
  Star,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Clock,
  ArrowRight,
  Sliders,
  Activity,
  Smile,
  Zap,
  Play,
  Pause,
  ChevronRight,
  UserCheck
} from "lucide-react";

interface HeroProps {
  onOpenAppointmentModal: (serviceName?: string) => void;
}

// Preset treatments for the interactive Hero Studio
const heroTreatments = [
  {
    id: "whitening",
    name: "Scaling & Stain Removal",
    tag: "Aesthetic & Hygiene",
    time: "30 - 45 Minutes",
    comfort: "Gentle & Comfortable",
    recovery: "Immediate Normal Activity",
    summary: "Ultrasonic removal of hardened tartar, tea/tobacco stains, followed by prophylactic polishing for a smooth, clean smile.",
    serviceKey: "Teeth Cleaning & Polishing",
    beforeLabel: "Calculus & Stains",
    afterLabel: "Polished & Bright Enamel",
    imageBefore: "/images/cleaning.jpg",
    imageAfter: "/images/whitening.jpg",
  },
  {
    id: "restoration",
    name: "Composite Tooth Filling",
    tag: "Conservative Care",
    time: "35 - 50 Minutes",
    comfort: "Completely Numbed / Painless",
    recovery: "Immediate Normal Chewing",
    summary: "Natural shade-matched resin composite bonded directly into cavity preps to halt decay and restore original tooth structure.",
    serviceKey: "Dental Fillings",
    beforeLabel: "Deep Cavity Decay",
    afterLabel: "Seamless Natural Restoration",
    imageBefore: "/images/dental-treatment.jpg",
    imageAfter: "/images/filling.jpg",
  },
  {
    id: "rct",
    name: "Pain-Relief Root Canal",
    tag: "Tooth Preservation",
    time: "45 - 60 Minutes",
    comfort: "Local Anesthesia - Zero Pain",
    recovery: "Same-Day Pain Relief",
    summary: "Gentle diseased pulp removal, biomechanical canal disinfection, and hermetic sealing to save severely aching or infected teeth.",
    serviceKey: "Root Canal Treatment",
    beforeLabel: "Infected Nerve Pain",
    afterLabel: "Hermetically Sealed & Saved",
    imageBefore: "/images/dental-treatment.jpg",
    imageAfter: "/images/root-canal.jpg",
  },
  {
    id: "crown",
    name: "Protective Dental Crown",
    tag: "Strength & Longevity",
    time: "2 Brief Sessions",
    comfort: "Precision Gentle Fit",
    recovery: "Full Chewing Confidence",
    summary: "Custom-fitted porcelain or zirconia restoration engineered to protect weak, fractured, or post-root-canal treated teeth.",
    serviceKey: "Crowns & Bridges",
    beforeLabel: "Fragile / Worn Tooth",
    afterLabel: "Reinforced Ceramic Crown",
    imageBefore: "/images/dental-treatment.jpg",
    imageAfter: "/images/crown.jpg",
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  // Studio interactive state
  const [activeTab, setActiveTab] = useState<"beforeAfter" | "procedureGuide" | "doctorProfile">("beforeAfter");
  const [selectedTreatmentIndex, setSelectedTreatmentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isAutoScanning, setIsAutoScanning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentTreatment = heroTreatments[selectedTreatmentIndex];

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  // Auto-scan slider animation
  useEffect(() => {
    if (!isAutoScanning) return;
    let step = 0.5;
    let forward = true;
    const interval = setInterval(() => {
      setSliderPosition((prev) => {
        if (prev >= 85) forward = false;
        if (prev <= 15) forward = true;
        return forward ? prev + step : prev - step;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [isAutoScanning]);

  // Drag & scrub handlers for Before/After Slider
  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleSliderMove(e.clientX);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-[#F0F7FF] to-[#FAFCFF] dark:from-[#060D1A] dark:via-[#09152B] dark:to-[#060D1A]"
    >
      {/* ========================================================================= */}
      {/* 1. DYNAMIC ANIMATED MOVING BACKGROUND LAYER (User feedback: halka halka chalna chahiye) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
        {/* Animated ambient drifting glow orbs */}
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-sky-400/20 via-cyan-300/15 to-transparent dark:from-sky-500/10 dark:via-cyan-400/8 dark:to-transparent rounded-full blur-3xl animate-drift" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-400/20 via-emerald-300/15 to-transparent dark:from-cyan-500/10 dark:via-emerald-400/8 dark:to-transparent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-sky-300/15 via-blue-200/10 to-transparent dark:from-sky-600/8 dark:to-transparent rounded-full blur-3xl animate-float-reverse" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#0284C7 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Floating animated dental sparkle & cross micro-particles */}
        <div className="absolute top-20 left-[12%] animate-float opacity-60 text-sky-400/70 dark:text-sky-400/40">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute top-44 right-[18%] animate-float-reverse opacity-50 text-cyan-400/60 dark:text-cyan-400/30">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-36 left-[22%] animate-drift opacity-40 text-emerald-400/60 dark:text-emerald-400/30">
          <Smile className="w-7 h-7" />
        </div>
        <div className="absolute top-1/2 right-[8%] animate-float opacity-30 text-sky-500/60 dark:text-sky-300/25">
          <Activity className="w-9 h-9" />
        </div>

        {/* Animated subtle horizontal scanning beam line */}
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 dark:via-sky-400/20 to-transparent animate-scan" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================================= */}
          {/* 2. LEFT COLUMN: Main Headlines, Interactive Triage Chips & CTAs */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Live Clinic Open & Location Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800/80 text-sky-900 dark:text-sky-200 text-xs sm:text-sm font-semibold mb-5 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">Clinic Open: 3PM - 9PM</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                Civil Lines, Mianwali
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-4 sm:mb-5">
              Healthy Smiles,{" "}
              <span className="relative whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-500 to-sky-700 dark:from-sky-400 dark:via-cyan-300 dark:to-sky-300">
                  Gentle Care
                </span>
                <span className="absolute left-0 -bottom-1.5 w-full h-[3px] bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full opacity-70" />
              </span>{" "}
              in Mianwali
            </h1>

            {/* Subheadline with verified Doctor Credentials */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6 max-w-xl">
              Led by <strong className="text-slate-900 dark:text-white font-semibold">{siteConfig.doctorName}</strong> ({siteConfig.designation}), offering conservative dentistry, modern pain-free protocols, and rigorous hygienic sterilization.
            </p>

            {/* INTERACTIVE QUICK TRIAGE: "What brings you in today?" */}
            <div className="w-full mb-6 p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md shadow-xs">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Interactive Care Selector: What do you need?</span>
              </div>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {heroTreatments.map((treatment, idx) => (
                  <button
                    key={treatment.id}
                    onClick={() => {
                      setSelectedTreatmentIndex(idx);
                      setActiveTab("beforeAfter");
                    }}
                    className={`text-xs px-2.5 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 ${
                      selectedTreatmentIndex === idx && activeTab === "beforeAfter"
                        ? "bg-sky-600 text-white shadow-sm"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-700 hover:text-sky-600"
                    }`}
                  >
                    <span>{treatment.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Google Rating Verified Chip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-2.5 sm:p-3 mb-6 sm:mb-7 bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs w-full sm:w-auto">
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
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {siteConfig.googleRating.score} / {siteConfig.googleRating.maxScore}
              </div>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{siteConfig.googleRating.reviewCount} Verified Google Reviews</span>
              </div>
              <a
                href={siteConfig.googleRating.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline underline-offset-2 ml-auto"
              >
                View Ratings
              </a>
            </div>

            {/* Primary & Secondary Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenAppointmentModal(currentTreatment.serviceKey)}
                id="hero-book-appointment-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 shadow-lg shadow-sky-600/25 transition-all hover:shadow-xl hover:shadow-sky-600/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                id="hero-call-now-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-xs transition-all"
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

            {/* Verified Clinical Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 sm:mt-7 pt-6 border-t border-slate-200/80 dark:border-slate-800 w-full text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>100% Sterile Protocol</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Gentle Treatment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Conservative Plan</span>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 3. RIGHT COLUMN: Interactive Dental Experience Studio (Interactive Hero) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Interactive Studio Frame Container */}
            <div className="w-full max-w-lg rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl transition-all">
              
              {/* Studio Header & Interactive Mode Switcher */}
              <div className="p-3 sm:p-4 bg-slate-50/90 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Interactive Dental Studio
                  </span>
                </div>

                {/* Studio Mode Tabs */}
                <div className="flex items-center gap-1 bg-slate-200/70 dark:bg-slate-700/70 p-1 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("beforeAfter")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "beforeAfter"
                        ? "bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-xs"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Reveal Slider
                  </button>
                  <button
                    onClick={() => setActiveTab("procedureGuide")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "procedureGuide"
                        ? "bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-xs"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Quick Guide
                  </button>
                  <button
                    onClick={() => setActiveTab("doctorProfile")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === "doctorProfile"
                        ? "bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-xs"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Dr. Tariq
                  </button>
                </div>
              </div>

              {/* TAB 1: INTERACTIVE BEFORE & AFTER SMILE REVEAL SLIDER */}
              {activeTab === "beforeAfter" && (
                <div className="p-4 sm:p-5">
                  {/* Treatment Selector Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                        {currentTreatment.tag}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {currentTreatment.name}
                      </h3>
                    </div>

                    {/* Auto-Scan Button */}
                    <button
                      onClick={() => setIsAutoScanning((prev) => !prev)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                        isAutoScanning
                          ? "bg-sky-100 dark:bg-sky-950/80 border-sky-400 text-sky-700 dark:text-sky-300"
                          : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                      }`}
                      title={isAutoScanning ? "Pause auto scan" : "Play auto scan"}
                    >
                      {isAutoScanning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      <span>{isAutoScanning ? "Scanning..." : "Auto-Scan"}</span>
                    </button>
                  </div>

                  {/* The Interactive Before/After Drag Container */}
                  <div
                    ref={sliderRef}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-inner border-2 border-slate-200 dark:border-slate-700 cursor-ew-resize select-none touch-none group"
                  >
                    {/* Layer 2: "After" Image (Base layer) */}
                    <div className="absolute inset-0">
                      <Image
                        src={currentTreatment.imageAfter}
                        alt={`After treatment: ${currentTreatment.afterLabel}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute top-2.5 right-2.5 bg-emerald-600/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>After: Result</span>
                      </div>
                    </div>

                    {/* Layer 1: "Before" Image (Clipped dynamically by slider position) */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <div className="relative w-full h-full" style={{ width: sliderRef.current?.clientWidth || 480 }}>
                        <Image
                          src={currentTreatment.imageBefore}
                          alt={`Before treatment: ${currentTreatment.beforeLabel}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover grayscale-[30%] brightness-95"
                        />
                      </div>
                      <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-xs">
                        <span>Before</span>
                      </div>
                    </div>

                    {/* Draggable Divider Handle */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 shadow-lg flex items-center justify-center text-sky-600 dark:text-sky-400">
                        <Sliders className="w-4 h-4 rotate-90" />
                      </div>
                    </div>

                    {/* Interactive Drag Hint Overlay */}
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-80">
                      ← Drag or swipe slider to compare →
                    </div>
                  </div>

                  {/* Clinical Description & Quick Booking Bar */}
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs">
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">
                        {currentTreatment.summary}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-sky-500" />
                          {currentTreatment.time}
                        </span>
                        <span>•</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                          {currentTreatment.comfort}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenAppointmentModal(currentTreatment.serviceKey)}
                      className="shrink-0 w-full sm:w-auto px-3.5 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Book Treatment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: INTERACTIVE PROCEDURE & COMFORT GUIDE */}
              {activeTab === "procedureGuide" && (
                <div className="p-4 sm:p-5">
                  <div className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
                    Select a Treatment to Inspect:
                  </div>

                  {/* Horizontal Treatment Switcher Chips */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {heroTreatments.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedTreatmentIndex(idx)}
                        className={`p-2.5 rounded-xl text-left border transition-all ${
                          selectedTreatmentIndex === idx
                            ? "bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-900 dark:text-sky-200"
                            : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                        }`}
                      >
                        <div className="text-xs font-bold truncate">{item.name}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">{item.time}</div>
                      </button>
                    ))}
                  </div>

                  {/* Detailed Specs Card */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 space-y-2.5">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200/80 dark:border-slate-700">
                      <span className="text-slate-500 dark:text-slate-400">Appointment Duration:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-sky-500" />
                        {currentTreatment.time}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200/80 dark:border-slate-700">
                      <span className="text-slate-500 dark:text-slate-400">Patient Comfort Level:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        {currentTreatment.comfort}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200/80 dark:border-slate-700">
                      <span className="text-slate-500 dark:text-slate-400">Expected Recovery:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-100">
                        {currentTreatment.recovery}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">
                      <span className="font-semibold text-slate-900 dark:text-white">Procedure Summary: </span>
                      {currentTreatment.summary}
                    </div>

                    <button
                      onClick={() => onOpenAppointmentModal(currentTreatment.serviceKey)}
                      className="w-full mt-2 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book {currentTreatment.name}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: DOCTOR PROFILE & VERIFIED CLINIC CONSULTATION */}
              {activeTab === "doctorProfile" && (
                <div className="p-4 sm:p-5">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 mb-3 bg-slate-100 dark:bg-slate-800">
                    <Image
                      src="/images/doctor.jpg"
                      alt="Dr. Tariq Mehmood Dental Surgeon"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-sm font-bold flex items-center gap-1.5">
                        <UserCheck className="w-4 h-4 text-sky-400" />
                        <span>{siteConfig.doctorName}</span>
                      </div>
                      <div className="text-xs text-slate-200">
                        {siteConfig.designation} • PMDC Verified
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>BDS - University of the Punjab, Lahore</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Ex-Demonstrator Montmorency College of Dentistry & DHQ Mianwali</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Sumbal Shaheed Road, Near NADRA Office, Civil Lines</span>
                    </div>
                  </div>

                  <div className="mt-3.5 grid grid-cols-2 gap-2">
                    <a
                      href={siteConfig.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-sky-600" />
                      <span>Get Directions</span>
                    </a>
                    <button
                      onClick={() => onOpenAppointmentModal("Consultation")}
                      className="py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Visit</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* FLOATING MICRO-ANIMATED BADGES (Responsive & Interactive) */}
            <div className="absolute -top-3.5 -left-3 sm:-top-5 sm:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 animate-float pointer-events-auto">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">4.2★ Google Rating</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">9 Local Reviews</div>
              </div>
            </div>

            <div className="absolute -bottom-3.5 -right-3 sm:-bottom-5 sm:-right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 animate-float-reverse pointer-events-auto">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">100% Autoclave</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">Sterilized Equipment</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
