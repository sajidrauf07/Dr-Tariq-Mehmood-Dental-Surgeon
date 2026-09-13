"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, ShieldCheck } from "lucide-react";

export const ReviewsAndTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentItem = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Reviews Highlight Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 dark:from-slate-950 dark:via-sky-950 dark:to-slate-950 rounded-3xl p-6 sm:p-12 text-white shadow-xl mb-16 relative overflow-hidden border border-sky-900/40">
          
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                Verified Google Business Profile
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
                Patient Feedback in Mianwali
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                We believe in genuine patient trust and ethical dentistry. Our clinical practice is publicly rated on Google Maps by visiting patients.
              </p>
            </div>

            {/* Score box & CTA */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 w-full max-w-xs text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-end gap-1.5 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/40 text-amber-400"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-3xl font-black text-white">
                  {siteConfig.googleRating.score} <span className="text-lg font-medium text-slate-300">/ 5.0</span>
                </div>
                <div className="text-xs text-slate-300 mt-1 mb-4">
                  Based on {siteConfig.googleRating.reviewCount} Verified Google Reviews
                </div>

                <a
                  href={siteConfig.googleRating.googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-sm"
                >
                  <span>View us on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Section Heading for Testimonial Carousel */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
            Patient Experience
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            What Patients Value About Our Care
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Client-editable feedback cards. Authentic reviews can be updated directly in siteConfig.ts.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-sm relative">
            <Quote className="w-10 sm:w-12 h-10 sm:h-12 text-sky-200 dark:text-sky-900/50 absolute top-6 right-6 sm:right-8 pointer-events-none" />

            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < currentItem.rating ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-slate-700"
                  }`}
                />
              ))}
            </div>

            {/* Review text */}
            <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-normal italic">
              &ldquo;{currentItem.review}&rdquo;
            </p>

            {/* Review Author & Details */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-slate-800">
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {currentItem.patientName}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {currentItem.date} {currentItem.serviceTag && `• ${currentItem.serviceTag}`}
                </div>
              </div>

              {currentItem.isVerifiedGoogle && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-300 font-semibold bg-emerald-50 dark:bg-emerald-950/70 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Google Feedback</span>
                </div>
              )}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-700 hover:text-sky-600 transition-colors shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === i ? "w-6 bg-sky-600" : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-700 hover:text-sky-600 transition-colors shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
