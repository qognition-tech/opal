import Script from "next/script";

export default function OpalConsultingSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Opal Consulting",
    "url": "https://www.opalconsulting.com.au/",
    "logo": "",
    "description":
      "Opal Consulting is a best migration and immigration consultant agency providing Australian visa, migration, and education services in Sydney, Nepal, and India.",
  "sameAs": [
    "https://www.instagram.com/opalconsulting2008/",
    "https://www.facebook.com/opalconsulting2008" ,
    "email": "info@opalconsulting.com.au",
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "MARN",
        "value": "0747526"
      },
      {
        "@type": "PropertyValue",
        "name": "ABN",
        "value": "53137476012"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "Country",
        "name": "Nepal"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Suite 709, Level 7, 370 Pitt Street",
        "addressLocality": "Sydney",
        "addressRegion": "NSW",
        "postalCode": "2000",
        "addressCountry": "AU"
      },
      {
        "@type": "PostalAddress",
        "streetAddress":
          "3rd Floor, Laxmi Plaza Building, Corner of Putalisadak and Pradarshani Margha Road",
        "addressLocality": "Kathmandu",
        "addressCountry": "NP"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Sikanderpur, Sector 26",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122002",
        "addressCountry": "IN"
      }
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+61-2-8188-0740",
        "contactType": "customer service",
        "areaServed": "AU"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+61-431-092-046",
        "contactType": "customer service",
        "areaServed": "AU"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+977-14528794",
        "contactType": "customer service",
        "areaServed": "NP"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+977-9851147801",
        "contactType": "customer service",
        "areaServed": "NP"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-8527661110",
        "contactType": "customer service",
        "areaServed": "IN"
      }
    ]
  };

  return (
    <Script
      id="opal-consulting-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

