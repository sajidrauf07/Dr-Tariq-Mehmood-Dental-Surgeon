import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  Activity,
  Users,
  FileText,
  Smile,
  Navigation,
  CalendarCheck,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-sky-600 dark:text-sky-400";
    switch (iconName) {
      case "Activity":
        return <Activity className={iconClass} />;
      case "Users":
        return <Users className={iconClass} />;
      case "FileText":
        return <FileText className={iconClass} />;
      case "Smile":
        return <Smile className={iconClass} />;
      case "Navigation":
        return <Navigation className={iconClass} />;
      case "CalendarCheck":
        return <CalendarCheck className={iconClass} />;
      default:
        return <Activity className={iconClass} />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
            Clinic Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Dr. Tariq Mehmood
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A healthcare practice built around clinical discipline, attentive patient listening, and accessible dental healthcare in Mianwali.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {siteConfig.whyChooseUs.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50/70 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 hover:bg-white dark:hover:bg-slate-850 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-xs border border-slate-200/70 dark:border-slate-700 flex items-center justify-center mb-6">
                {getFeatureIcon(feature.icon)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
