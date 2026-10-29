// Alfa Shop details used across the site. Edit here, not in the pages.
export const site = {
  name: "Alfa Shop",
  url: "https://shop.globalalfabet.com",
  currency: "USD", // every price in src/content/items.js is in US dollars
  email: "hello@globalalfabet.com",
  phone: "+263 772 906 967",
  whatsapp: "263772906967", // digits only: orders go to this WhatsApp number
  parent: { name: "Global Alfabet", url: "https://www.globalalfabet.com" },
  maps: "https://maps.globalalfabet.com",
  finda: "https://finda.globalalfabet.com",
  // Google Analytics 4 measurement ID ("G-…"). Julius pastes it here. Empty: no analytics and no cookie banner.
  // Analytics only runs after a visitor presses Accept (src/lib/consent.js).
  analytics: { ga4: "" },
  // Our social media profiles, shown in the footer. TODO: Julius sends the real links; "#" is a placeholder.
  // Leave one empty ("") to hide it.
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },
};
