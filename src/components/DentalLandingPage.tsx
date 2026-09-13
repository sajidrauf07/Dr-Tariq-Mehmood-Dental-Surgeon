"use client";

import React, { useState } from "react";
import { ThemeProvider } from "./ThemeContext";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { TrustStats } from "./TrustStats";
import { AboutDoctor } from "./AboutDoctor";
import { Services } from "./Services";
import { FeaturedTreatments } from "./FeaturedTreatments";
import { WhyChooseUs } from "./WhyChooseUs";
import { PatientJourney } from "./PatientJourney";
import { ReviewsAndTestimonials } from "./ReviewsAndTestimonials";
import { FaqSection } from "./FaqSection";
import { LocationSection } from "./LocationSection";
import { Footer } from "./Footer";
import { AppointmentModal } from "./AppointmentModal";
import { DentalChatbot } from "./DentalChatbot";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { MobileBottomBar } from "./MobileBottomBar";

export const DentalLandingPageContent: React.FC = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>("");
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const handleOpenAppointmentModal = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName || "");
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setAppointmentModalOpen(false);
    setSelectedServiceForBooking("");
  };

  const handleToggleChatbot = () => {
    setChatbotOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF] dark:bg-[#060D1A] text-slate-900 dark:text-slate-100 selection:bg-sky-100 dark:selection:bg-sky-900 selection:text-sky-900 dark:selection:text-sky-100 transition-colors duration-300">
      
      {/* Sticky Top Navbar with Day/Night Mode Button */}
      <Navbar onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero onOpenAppointmentModal={() => handleOpenAppointmentModal()} />
        <TrustStats />
        <AboutDoctor onOpenAppointmentModal={() => handleOpenAppointmentModal()} />
        <Services onOpenAppointmentModal={(serviceName) => handleOpenAppointmentModal(serviceName)} />
        <FeaturedTreatments onOpenAppointmentModal={(serviceName) => handleOpenAppointmentModal(serviceName)} />
        <WhyChooseUs />
        <PatientJourney />
        <ReviewsAndTestimonials />
        <FaqSection />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* Floating Elements (WhatsApp & Chatbot) */}
      <FloatingWhatsApp />
      <DentalChatbot
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        isOpenExternal={chatbotOpen}
        onToggleExternal={handleToggleChatbot}
      />

      {/* Mobile Fixed Bottom Action Bar with 1-tap Chatbot trigger */}
      <MobileBottomBar
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        onOpenChatbot={handleToggleChatbot}
      />

      {/* Appointment Request Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        preselectedService={selectedServiceForBooking}
      />

    </div>
  );
};

export const DentalLandingPage: React.FC = () => {
  return (
    <ThemeProvider>
      <DentalLandingPageContent />
    </ThemeProvider>
  );
};
