import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Calendar, GraduationCap, ShieldCheck, HeartHandshake, Info } from "lucide-react";

interface AboutDoctorProps {
  onOpenAppointmentModal: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="about" className="py-20 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
            About The Doctor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Meet {siteConfig.doctorProfile.name}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Dedicated Dental Surgeon in Civil Lines, Mianwali, providing compassionate and professional oral healthcare.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Doctor Portrait / Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
              
              {/* Header Banner: Clinic Atmosphere */}
              <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600">
                <Image
                  src="/images/clinic.jpg"
                  alt="Dr. Tariq Mehmood Dental Clinic Mianwali"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover opacity-35 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1.5 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>PMDC Verified</span>
                </div>
              </div>

              {/* Centered Doctor Avatar with High Retina Sharpness */}
              <div className="relative flex flex-col items-center px-6 pb-6 pt-0 text-center">
                <div className="relative -mt-16 sm:-mt-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 ring-4 ring-sky-500/25 bg-slate-100 dark:bg-slate-800 shrink-0">
                  <Image
                    src="/images/doctor-avatar.png"
                    alt={`${siteConfig.doctorProfile.name} - ${siteConfig.doctorProfile.title}`}
                    fill
                    sizes="160px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="mt-3.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {siteConfig.doctorProfile.name}
                  </h3>
                  <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    {siteConfig.doctorProfile.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {siteConfig.contact.address.street}, {siteConfig.contact.address.neighborhood}, {siteConfig.contact.address.city}
                  </p>
                </div>

                {/* Verified Credentials Pills */}
                <div className="w-full mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
                    <GraduationCap className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>BDS — University of the Punjab, Lahore</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-slate-600 dark:text-slate-400 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Ex-Demonstrator Montmorency & DHQ Mianwali</span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={onOpenAppointmentModal}
                  className="w-full mt-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-sky-600/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation With Dr. Tariq</span>
                </button>
              </div>

            </div>
          </div>

          {/* Details & Credentials Column */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 dark:border-slate-800">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Professional Practice in Mianwali
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {siteConfig.doctorProfile.biography}
                </p>
              </div>

              {/* Patient Care Philosophy */}
              <div className="mb-8 p-5 rounded-2xl bg-sky-50/60 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/60">
                <div className="flex items-center gap-2 text-sky-900 dark:text-sky-200 font-bold text-sm mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>Patient-Care Philosophy</span>
                </div>
                <p className="text-xs sm:text-sm text-sky-800/90 dark:text-sky-300/90 leading-relaxed italic">
                  &ldquo;{siteConfig.doctorProfile.philosophy}&rdquo;
                </p>
              </div>

              {/* Education & Experience References (Editable) */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  Professional Background & Associations
                </h4>
                
                <div className="space-y-3">
                  {siteConfig.doctorProfile.educationNotes.map((note, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={onOpenAppointmentModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-md hover:shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Consultation</span>
                </button>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span>Inquire at {siteConfig.contact.phone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
