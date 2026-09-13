"use client";

import React, { useState } from "react";
import { siteConfig, ServiceItem } from "@/config/siteConfig";
import { ServiceModal } from "./ServiceModal";
import {
  Stethoscope,
  MessageSquare,
  Sparkles,
  Award,
  Sun,
  Layers,
  Zap,
  Scissors,
  HelpCircle,
  Shield,
  Crown,
  GitMerge,
  Box,
  Anchor,
  Compass,
  Heart,
  Thermometer,
  Smile,
  AlertCircle,
  Calendar,
  ChevronRight,
  Search,
} from "lucide-react";

interface ServicesProps {
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAppointmentModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = ["All", "Preventive", "Restorative", "Cosmetic", "Surgical", "General"];

  const getServiceIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-sky-600 dark:text-sky-400";
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className={iconClass} />;
      case "MessageSquare":
        return <MessageSquare className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      case "Award":
        return <Award className={iconClass} />;
      case "Sun":
        return <Sun className={iconClass} />;
      case "Layers":
        return <Layers className={iconClass} />;
      case "Zap":
        return <Zap className={iconClass} />;
      case "Scissors":
        return <Scissors className={iconClass} />;
      case "HelpCircle":
        return <HelpCircle className={iconClass} />;
      case "Shield":
        return <Shield className={iconClass} />;
      case "Crown":
        return <Crown className={iconClass} />;
      case "GitMerge":
        return <GitMerge className={iconClass} />;
      case "Box":
        return <Box className={iconClass} />;
      case "Anchor":
        return <Anchor className={iconClass} />;
      case "Compass":
        return <Compass className={iconClass} />;
      case "Heart":
        return <Heart className={iconClass} />;
      case "Thermometer":
        return <Thermometer className={iconClass} />;
      case "Smile":
        return <Smile className={iconClass} />;
      case "AlertCircle":
        return <AlertCircle className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const allServices = siteConfig.services as unknown as ServiceItem[];
  const filteredServices = allServices.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
            Comprehensive Dental Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Dental Services in Mianwali
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From routine checkups and preventive teeth cleaning to complex restorations and pain relief, each treatment is guided by clinical examination and patient comfort.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 dark:text-slate-100"
            />
          </div>

        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-slate-800 group-hover:bg-sky-100/70 dark:group-hover:bg-slate-700 flex items-center justify-center transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-2">
                  {service.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1 transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenAppointmentModal(service.name)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/70 hover:bg-sky-600 dark:hover:bg-sky-600 hover:text-white dark:hover:text-white transition-all border border-sky-200/60 dark:border-sky-800"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No services found matching &ldquo;{searchQuery}&rdquo;. Try another term or contact us directly.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Medical disclaimer note */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            <strong>Clinical Note:</strong> Treatment suitability is determined solely after clinical and diagnostic evaluation by Dr. Tariq Mehmood. No medical procedure is guaranteed without in-person consultation.
          </p>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBookService={(serviceName) => onOpenAppointmentModal(serviceName)}
      />
    </section>
  );
};
