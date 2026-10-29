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
    line: "Codes delivered digitally.",
    art: "giftcard",
  },
  {
    slug: "airtime",
    name: "Airtime",
    line: "Top-up cards, delivered digitally.",
    art: "airtime",
  },
];

export const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

// How an item reaches the buyer. Every item has one of these as `delivery`.
export const deliveryTypes = {
  digital: {
    label: "Delivered digitally",
    detail: "Nothing to collect. We send you the code or card once you've paid.",
  },
  physical: {
    label: "Delivery or collection",
    detail: "We agree delivery or collection with you when we confirm your order.",
  },
};
