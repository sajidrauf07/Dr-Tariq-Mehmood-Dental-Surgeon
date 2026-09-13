import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Phone, MessageCircle, Navigation, Clock, Building, ExternalLink } from "lucide-react";

export const LocationSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Dr. Tariq Mehmood, I need directions to your clinic on Sumbal Shaheed Road, Mianwali."
  )}`;

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
            Clinic Location
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Visit Our Clinic in Mianwali
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Conveniently situated in Civil Lines on Sumbal Shaheed Road, near the landmark NADRA Office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span>Clinic Address</span>
              </h3>

              {/* Address card */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-base">
                      {siteConfig.clinicName}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {siteConfig.contact.address.street},<br />
                      {siteConfig.contact.address.neighborhood},<br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.province}, Pakistan
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                  <Clock className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">
                      Consultation Hours
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                      {siteConfig.contact.hours.map((h, i) => (
                        <div key={i}>
                          <span className="font-medium text-slate-700 dark:text-slate-300">{h.days}:</span> {h.time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                  <Phone className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">Direct Phone</div>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-base font-bold text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed Frame */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 flex flex-col">
              <iframe
                title="Dr Tariq Mehmood Dental Surgeon Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13554.45265451636!2d71.5332!3d32.5855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39276d49811c750b%3A0xa64585144b60e909!2sCivil%20Lines%2C%20Mianwali%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full min-h-[340px] border-0 flex-1"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map showing Dr. Tariq Mehmood Dental Clinic location in Mianwali"
              />

              {/* Map Footer Banner */}
              <div className="bg-white dark:bg-slate-900 p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Landmark:</span> Near NADRA Office, Sumbal Shaheed Road, Civil Lines, Mianwali
                </div>
                <a
                  href={siteConfig.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
