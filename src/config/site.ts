/**
 * Single source of truth for brand and contact details.
 * Swap placeholder values here (logo, name, address) without touching components.
 */
export const siteConfig = {
  name: "The Block Bagru",
  tagline: "Handcrafted block-print ethnic wear",
  description:
    "Authentic Bagru and Ajrakh block-print sarees and suits, handcrafted in Rajasthan.",
  /** Placeholder until the real logo is supplied. */
  logo: { src: "/logo-placeholder.svg", alt: "The Block Bagru logo" },
  contact: {
    phone: "8813835525",
    whatsapp: "8813835525",
    /** TODO: replace once the client provides an email. */
    email: "hello@example.com",
    address: "Bagru, Jaipur, Rajasthan, India",
    /** Optional. Footer hides it when empty. */
    gstin: "",
  },
} as const;

/** Normalises a phone number to digits, adding India's +91 to 10-digit numbers. */
export function toWhatsappNumber(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
}

/** Builds a wa.me deep link for the configured WhatsApp number. */
export function whatsappLink(message?: string): string {
  const number = toWhatsappNumber(siteConfig.contact.whatsapp);
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}
