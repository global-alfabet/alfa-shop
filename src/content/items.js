// Everything for sale on Alfa Shop. Order here = order on the site. Only Global Alfabet's own items for now.
//
// Adding an item (see README.md for the full guide):
//   id          the address: /item/<id>. Lowercase words and dashes. Never change it once the item is live.
//   name        what it is, in plain words ("Power bank, 10,000 mAh")
//   category    a slug from categories.js: "products", "gift-cards" or "airtime"
//   summary     one line for cards and search results
//   description paragraphs for the item page
//   price       in US dollars, for an item with one price…
//   options     …or a list of choices, each with its own price: { label: "Amount", choices: [{ label: "$10", price: 10 }] }
//   delivery    "digital" (sent on WhatsApp) or "physical" (delivery or collection), see categories.js
//   status      "available" or "sold-out" (shown, but can't be ordered)
//   photos      optional: files in public/items/<id>/, e.g. ["/items/power-bank/1.jpg"]. Your own photos or ones the
//               maker allows sellers to use; never copied from another shop. Without photos, `art` is drawn instead.
//   art         drawing to show without photos: giftcard, airtime, powerbank, charger, earbuds, lantern, box
//   details     optional: [label, value] pairs shown as a list ("Capacity", "10,000 mAh")
//   featured    optional: true shows it on the home page
//   example     true for the placeholder items below. They're labelled "Example" and can't be ordered.
//               Delete them once real items are in.
export const items = [
  {
    id: "gift-card",
    name: "Gift card",
    category: "gift-cards",
    summary: "A gift card code, delivered digitally.",
    description: [
      "This is an example of how a gift card will look on Alfa Shop.",
      "Real gift cards will name the store they're for and the values we have in stock.",
    ],
    options: {
      label: "Amount",
      choices: [
        { label: "$10", price: 10 },
        { label: "$25", price: 25 },
        { label: "$50", price: 50 },
        { label: "$100", price: 100 },
      ],
    },
    delivery: "digital",
    status: "available",
    art: "giftcard",
    featured: true,
    example: true,
  },
  {
    id: "airtime-card",
    name: "Airtime top-up card",
    category: "airtime",
    summary: "Airtime for your phone, delivered digitally.",
    description: [
      "This is an example of how airtime will look on Alfa Shop.",
      "Real listings will name the mobile network and the amounts we have in stock.",
    ],
    options: {
      label: "Amount",
      choices: [
        { label: "$1", price: 1 },
        { label: "$2", price: 2 },
        { label: "$5", price: 5 },
        { label: "$10", price: 10 },
        { label: "$20", price: 20 },
      ],
    },
    delivery: "digital",
    status: "available",
    art: "airtime",
    featured: true,
    example: true,
  },
  {
    id: "power-bank",
    name: "Power bank, 10,000 mAh",
    category: "products",
    summary: "Charges a phone about twice. USB-C and USB-A.",
    description: [
      "This is an example of how a product will look on Alfa Shop.",
      "Real products will have photos, the exact make and model, and what comes in the box.",
    ],
    price: 18,
    delivery: "physical",
    status: "available",
    art: "powerbank",
    details: [
      ["Capacity", "10,000 mAh"],
      ["Ports", "USB-C and USB-A"],
      ["In the box", "Power bank and USB-C cable"],
    ],
    featured: true,
    example: true,
  },
  {
    id: "solar-lantern",
    name: "Solar lantern",
    category: "products",
    summary: "Charges in the sun, lights a room at night.",
    description: [
      "This is an example of how a product will look on Alfa Shop.",
      "Real products will have photos, the exact make and model, and what comes in the box.",
    ],
    price: 15,
    delivery: "physical",
    status: "available",
    art: "lantern",
    details: [
      ["Charging", "Built-in solar panel or USB"],
      ["Light", "Three brightness settings"],
    ],
    featured: true,
    example: true,
  },
  {
    id: "usb-c-charger",
    name: "USB-C phone charger, 20 W",
    category: "products",
    summary: "Fast charging for most phones.",
    description: [
      "This is an example of how a product will look on Alfa Shop.",
      "Real products will have photos, the exact make and model, and what comes in the box.",
    ],
    price: 9,
    delivery: "physical",
    status: "available",
    art: "charger",
    details: [
      ["Power", "20 W"],
      ["Plug", "Type G (three-pin)"],
    ],
    example: true,
  },
  {
    id: "wireless-earbuds",
    name: "Wireless earbuds",
    category: "products",
    summary: "Bluetooth earbuds with a charging case.",
    description: [
      "This is an example of how a product will look on Alfa Shop.",
      "Real products will have photos, the exact make and model, and what comes in the box.",
    ],
    price: 25,
    delivery: "physical",
    status: "sold-out",
    art: "earbuds",
    details: [
      ["Connection", "Bluetooth"],
      ["In the box", "Earbuds, charging case and cable"],
    ],
    example: true,
  },
];

export const itemById = Object.fromEntries(items.map((i) => [i.id, i]));

/** Lowest price of an item: its price, or the cheapest of its options. */
export function fromPrice(item) {
  return item.options ? Math.min(...item.options.choices.map((c) => c.price)) : item.price;
}

/** True when an item can be ordered today. */
export const canOrder = (item) => !item.example && item.status === "available";
