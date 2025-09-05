export const SITE = {
  title: "Phoenix Moving - Professional Moving Services",
  description: "Professional moving services with experienced movers. Residential and commercial moves, packing services, and storage solutions.",
  url: "https://www.gophoenixmoving.com", // Update with your actual domain
  author: "Phoenix Moving",
  ogImage: "/og-image.jpg",
  twitterHandle: "@phoenixmoving",
  keywords: "moving services, professional movers, residential moving, commercial moving, packing services",
  language: "en",
  locale: "en_US",
  type: "website",
  // Analytics
  googleAnalyticsId: "G-XXXXXXXXXX", // Replace with your GA4 ID
  googleTagManagerId: "GTM-XXXXXXX", // Replace with your GTM ID
  // Social Media
  facebookAppId: "your-facebook-app-id",
  // Contact
  contactEmail: "info@gophoenixmoving.com",
  contactPhone: "(508) 315-9458",
  // Business Info
  businessName: "Phoenix Moving & Storage",
  businessAddress: "18 Lakeview Gardens, Natick, MA 01760",
  businessHours: "Monday - Friday: 8AM - 6PM",
  businessLicenses: {
    MDPU: "32054",
    DOT: "3868109",
    MC: "01415308",
  },
  // Schema.org structured data
  schema: {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Phoenix Moving",
    "description": "Professional moving services with experienced movers",
    "url": "https://www.gophoenixmoving.com",
    "telephone": "(508) 315-9458",
    "email": "info@gophoenixmoving.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18 Lakeview Gardens",
      "addressLocality": "Natick",
      "addressRegion": "MA",
      "postalCode": "01760",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 42.2728,
        "longitude": -71.3692
      },
      "geoRadius": "50000"
    }
  }
};