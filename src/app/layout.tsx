import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0284C7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://drtariqmehmooddentalsurgeon.pk"),
  title: `${siteConfig.doctorName} | Dental Surgeon in Mianwali | Dr Tariq Mehmood`,
  description: `Professional dental care in Mianwali by Dr. Tariq Mehmood (Dental Surgeon). Located on Sumbal Shaheed Road, Civil Lines, near NADRA Office. Call 0300 4757123 for appointments.`,
  keywords: [
    "Dentist in Mianwali",
    "Dental Surgeon in Mianwali",
    "Dental Clinic in Mianwali",
    "Dr Tariq Mehmood Dental Surgeon",
    "Best Dentist in Mianwali",
    "Root Canal Treatment Mianwali",
    "Teeth Cleaning Mianwali",
    "Teeth Whitening Mianwali",
    "Dental Checkup Mianwali",
    "Dental Clinic Civil Lines Mianwali",
    "Dentist near NADRA Office Mianwali",
  ],
  authors: [{ name: siteConfig.doctorName }],
  creator: siteConfig.clinicName,
  publisher: siteConfig.clinicName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://drtariqmehmooddentalsurgeon.pk",
    title: `${siteConfig.doctorName} - Dental Surgeon in Mianwali`,
    description: siteConfig.subheadline,
    siteName: siteConfig.clinicName,
    images: [
      {
        url: "/images/doctor.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.clinicName} - Civil Lines, Mianwali`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.doctorName} - Dental Surgeon Mianwali`,
    description: `Compassionate dental care in Civil Lines, Mianwali. Phone: ${siteConfig.contact.phone}`,
    images: ["/images/doctor.jpg"],
  },
  alternates: {
    canonical: "https://drtariqmehmooddentalsurgeon.pk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Verified Dentist / MedicalClinic structured data schema
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.clinicName,
    alternateName: "Dr. Tariq Mehmood Dental Clinic",
    description: siteConfig.subheadline,
    url: "https://drtariqmehmooddentalsurgeon.pk",
    telephone: siteConfig.contact.phoneInternational,
    image: "https://drtariqmehmooddentalsurgeon.pk/images/doctor.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.province,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.coordinates.latitude,
      longitude: siteConfig.contact.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "15:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating.score,
      bestRating: siteConfig.googleRating.maxScore,
      reviewCount: siteConfig.googleRating.reviewCount,
    },
    areaServed: {
      "@type": "City",
      name: "Mianwali",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Procedures & Services",
      itemListElement: siteConfig.services.slice(0, 10).map((s, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.shortDesc,
        },
      })),
    },
  };

  // FAQPage structured data schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAFCFF] text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
