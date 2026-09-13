import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { ShieldCheck, HeartHandshake, Sparkles, MapPin } from "lucide-react";

export const TrustStats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
    }
  };

  return (
    <section className="relative z-10 -mt-6 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {siteConfig.trustCards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 shadow-md shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-slate-800 flex items-center justify-center mb-4">
                {getIcon(card.icon)}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400">
              <span>Verified Standards</span>
              <span className="ml-1.5">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
