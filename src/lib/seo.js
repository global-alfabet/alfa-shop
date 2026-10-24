// Search and sharing details for every page: title, description, canonical address, share image and structured
// data (JSON-LD). Used twice: at build time, to write each page's HTML (scripts/prerender.js), and in the browser,
// to update the <head> when a visitor moves between pages (components/Seo.jsx).
// A new page needs an entry in `pages` below. A new item or section needs nothing: they come from src/content.
import { site } from "../config.js";
import { items, itemById, fromPrice } from "../content/items.js";
import { categories, categoryBySlug } from "../content/categories.js";
import { money } from "./money.js";

export const SITE_URL = site.url.replace(/\/$/, "");
const absolute = (path) => (/^https?:/.test(path) ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`);

const SHARE_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Alfa Shop: products, gift cards and airtime from Global Alfabet, ordered on WhatsApp",
};

// Titles show as "<title> · Alfa Shop" (under 60 characters). Descriptions under about 160 characters.
const pages = {
  "/": {
    fullTitle: "Alfa Shop · Products, gift cards and airtime from Global Alfabet",
    description:
      "Products, gift cards and airtime from Global Alfabet in Zimbabwe. Pick what you want and order it on WhatsApp. No account needed.",
  },
  "/shop": {
    title: "Shop all",
    description: "Everything on Alfa Shop: products we deliver, gift cards and airtime we send on WhatsApp.",
    crumb: "Shop all",
  },
  "/how-to-order": {
    title: "How to order",
    description:
      "Order on WhatsApp: pick an item, send the message we write for you, and we reply to confirm the price and how to pay.",
    crumb: "How to order",
  },
  "/privacy": {
    title: "Privacy",
    description: "Alfa Shop has no accounts, forms or tracking. Orders are WhatsApp messages you choose to send.",
    crumb: "Privacy",
  },
};

const NOT_FOUND = {
  title: "Page not found · Alfa Shop",
  description: "This page doesn't exist. The item may have sold out or moved.",
  noindex: true,
};

// Every address that gets its own HTML file at build time.
export const routes = [
  ...Object.keys(pages),
  ...categories.map((c) => `/${c.slug}`),
  ...items.map((i) => `/item/${i.id}`),
];

const organizationId = `${site.parent.url}/#organization`;

function organization() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: site.parent.name,
    url: `${site.parent.url}/`,
    email: site.email,
    telephone: site.phone,
    address: { "@type": "PostalAddress", addressCountry: "ZW" },
  };
}

function website() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: site.name,
    inLanguage: "en",
    publisher: { "@id": organizationId },
  };
}

function breadcrumbs(trail) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [["Alfa Shop", "/"], ...trail].map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absolute(path),
    })),
  };
}

// Product details for search engines. Only for real items: example items are not for sale.
function product(item, url) {
  const availability = `https://schema.org/${item.status === "available" ? "InStock" : "OutOfStock"}`;
  const seller = { "@id": organizationId };
  const prices = item.options ? item.options.choices.map((c) => c.price) : [item.price];
  const offers =
    prices.length > 1
      ? {
          "@type": "AggregateOffer",
          priceCurrency: site.currency,
          lowPrice: Math.min(...prices),
          highPrice: Math.max(...prices),
          offerCount: prices.length,
          availability,
          url,
          seller,
        }
      : { "@type": "Offer", priceCurrency: site.currency, price: prices[0], availability, url, seller };
  return {
    "@type": "Product",
    name: item.name,
    description: [item.summary, ...(item.description || [])].join(" "),
    sku: item.id,
    category: categoryBySlug[item.category]?.name,
    ...(item.brand ? { brand: { "@type": "Brand", name: item.brand } } : {}),
    ...(item.photos?.length ? { image: item.photos.map(absolute) } : {}),
    offers,
  };
}

const normalise = (pathname) => (pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname) || "/";

/** Everything the <head> needs for one address. */
export function getMeta(pathname) {
  const path = normalise(pathname);
  const image = { ...SHARE_IMAGE, url: absolute(SHARE_IMAGE.url) };

  const item = path.startsWith("/item/") ? itemById[path.slice("/item/".length)] : null;
  if (item) {
    const url = absolute(path);
    const cat = categoryBySlug[item.category];
    const photo = item.photos?.length ? { url: absolute(item.photos[0]), alt: item.name } : image;
    return {
      title: `${item.example ? "Example: " : ""}${item.name} · ${site.name}`,
      description: item.example
        ? `An example of how ${cat?.name.toLowerCase() || "items"} will look on Alfa Shop. Not for sale.`
        : `${item.summary} ${item.options ? "From " : ""}${money(fromPrice(item))}. Order on WhatsApp from Global Alfabet.`,
      // Example items are placeholders: keep them out of search results.
      canonical: item.example ? null : url,
      noindex: Boolean(item.example),
      type: item.example ? "website" : "product",
      image: photo,
      jsonLd: [
        ...(item.example ? [] : [product(item, url)]),
        breadcrumbs([
          [cat?.name || "Shop all", cat ? `/${cat.slug}` : "/shop"],
          [item.name, path],
        ]),
      ],
    };
  }

  const cat = categoryBySlug[path.slice(1)];
  if (cat) {
    return {
      title: `${cat.name} · ${site.name}`,
      description: `${cat.name} on Alfa Shop. ${cat.line} Order on WhatsApp from Global Alfabet.`,
      canonical: absolute(path),
      type: "website",
      image,
      jsonLd: [
        breadcrumbs([
          ["Shop all", "/shop"],
          [cat.name, path],
        ]),
      ],
    };
  }

  const page = pages[path];
  if (!page) return { ...NOT_FOUND, canonical: null, type: "website", image, jsonLd: [] };

  const jsonLd = path === "/" ? [organization(), website()] : page.crumb ? [breadcrumbs([[page.crumb, path]])] : [];
  return {
    title: page.fullTitle || `${page.title} · ${site.name}`,
    description: page.description,
    canonical: page.noindex ? null : absolute(path),
    noindex: Boolean(page.noindex),
    type: "website",
    image,
    jsonLd,
  };
}

const escape = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

/** JSON-LD as text that is safe inside a <script> tag. */
export const jsonLdText = (list) =>
  JSON.stringify(
    list.length === 1
      ? { "@context": "https://schema.org", ...list[0] }
      : { "@context": "https://schema.org", "@graph": list },
  ).replace(/</g, "\\u003c");

/** The <head> tags for one page, as HTML. Used by the build. */
export function headTags(meta) {
  const tags = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    meta.noindex ? `<meta name="robots" content="noindex, follow" />` : "",
    meta.canonical ? `<link rel="canonical" href="${escape(meta.canonical)}" />` : "",
    `<meta property="og:site_name" content="${escape(site.name)}" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    meta.canonical ? `<meta property="og:url" content="${escape(meta.canonical)}" />` : "",
    `<meta property="og:image" content="${escape(meta.image.url)}" />`,
    meta.image.width ? `<meta property="og:image:width" content="${meta.image.width}" />` : "",
    meta.image.height ? `<meta property="og:image:height" content="${meta.image.height}" />` : "",
    `<meta property="og:image:alt" content="${escape(meta.image.alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(meta.title)}" />`,
    `<meta name="twitter:description" content="${escape(meta.description)}" />`,
    `<meta name="twitter:image" content="${escape(meta.image.url)}" />`,
    `<meta name="twitter:image:alt" content="${escape(meta.image.alt)}" />`,
    meta.jsonLd.length ? `<script type="application/ld+json" id="page-jsonld">${jsonLdText(meta.jsonLd)}</script>` : "",
  ];
  return tags.filter(Boolean).join("\n    ");
}

/** sitemap.xml: every page that search engines should index. */
export function sitemap() {
  const entries = routes
    .filter((path) => !getMeta(path).noindex)
    .map((path) => `  <url><loc>${absolute(path)}</loc></url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
}

/** llms.txt: a plain summary of the site for AI assistants (https://llmstxt.org). */
export function llmsTxt() {
  const real = items.filter((i) => !i.example);
  const line = (i) =>
    `- [${i.name}](${absolute(`/item/${i.id}`)}): ${i.summary} ${i.options ? "From " : ""}${money(fromPrice(i))}${i.status === "available" ? "" : " (sold out)"}.`;
  return [
    `# ${site.name}`,
    "",
    `> ${site.name} is the online shop of ${site.parent.name}, a technology company in ${site.country}. It sells ${site.parent.name}'s own products, gift cards and airtime. Buyers order on WhatsApp (+${site.whatsapp}); there is no checkout or account. Prices are in US dollars.`,
    "",
    "## Sections",
    ...categories.map((c) => `- [${c.name}](${absolute(`/${c.slug}`)}): ${c.line}`),
    "",
    "## Items",
    ...(real.length
      ? real.map(line)
      : ["- The shop is opening soon. The items on the site today are examples and can't be ordered."]),
    "",
    "## Pages",
    `- [How to order](${absolute("/how-to-order")})`,
    `- [Privacy](${absolute("/privacy")})`,
    "",
    "## Contact",
    `- WhatsApp: ${site.phone}`,
    `- Email: ${site.email}`,
    "",
  ].join("\n");
}
