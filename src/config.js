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
  analytics: {
    ga4: "G-47R00SKKE8",
    // Cloudflare Web Analytics token: counts every visit without cookies (src/lib/webAnalytics.js). Empty: off.
    cloudflare: "8681a66324c0424eba05575dae794588",
    // Meta Pixel ID (digits only, from Meta Events Manager). Empty: no pixel. It loads only after a visitor allows
    // advertising on the cookie banner (src/lib/consent.js), and sends only PageView (this site has no form, so no
    // Lead; Order now isn't sent to Meta). Before you fill it in: Julius approves the privacy and cookie wording
    // (src/pages/Privacy.jsx shows it then).
    metaPixel: "",
  },
  // Search engine ownership checks. Paste only the code from content="…" (Google Search Console: "HTML tag";
  // Bing Webmaster Tools: "Meta tag"). Empty: no tag. Not needed for a domain verified with a DNS TXT record.
  verification: {
    google: "", // <meta name="google-site-verification">
    bing: "", // <meta name="msvalidate.01">
  },
  // Our social media profiles, shown in the footer.
  // Leave one empty ("") to hide it.
  social: {
    instagram: "https://www.instagram.com/globalalfabet/",
    facebook: "https://www.facebook.com/profile.php?id=100086531795259",
    linkedin: "https://www.linkedin.com/company/global-alfabet/",
    youtube: "https://www.youtube.com/@GlobalAlfabet",
  },
};
