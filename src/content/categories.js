// The shop's sections. Order here = order on the site. `slug` is the section's address: /<slug>. It must not clash with
// another page's address (shop, item, how-to-order, privacy).
// `art` is the drawing shown on the section tile (see components/ItemArt.jsx).
export const categories = [
  {
    slug: "products",
    name: "Products",
    line: "Things we deliver or you collect.",
    art: "box",
  },
  {
    slug: "gift-cards",
    name: "Gift cards",
    line: "Codes we send to you on WhatsApp.",
    art: "giftcard",
  },
  {
    slug: "airtime",
    name: "Airtime",
    line: "Top-up cards, sent on WhatsApp.",
    art: "airtime",
  },
];

export const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

// How an item reaches the buyer. Every item has one of these as `delivery`.
export const deliveryTypes = {
  digital: {
    label: "Sent on WhatsApp",
    detail: "Nothing to collect. We send the code or card to your WhatsApp once you've paid.",
  },
  physical: {
    label: "Delivery or collection",
    detail: "We agree delivery or collection with you on WhatsApp when we confirm your order.",
  },
};
