import { useEffect } from 'react';

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    // Update Title
    const baseTitle = "PrimeFix Solutions";
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // Update Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || "Authorized HP partner specializing in pro workstations, precision printing, and genuine tech accessories.");
    }

    // Update Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords || "HP Authorized Partner, Premium Laptops, Business Printers, Tech Support");

  }, [title, description, keywords]);

  return null;
}