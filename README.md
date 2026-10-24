# Alfa Shop

**shop.globalalfabet.com**: things Global Alfabet sells, ordered on WhatsApp. A Global Alfabet product.

Version 1 is simple on purpose: Global Alfabet's own products, gift cards and airtime, listed on the site. Buyers pick
an item (and an amount or option if it has them), tap **Order on WhatsApp**, and send the message the site writes for
them. There's no cart, checkout, account or payment on the site. Other sellers can join later.

React 18 + Vite + react-router, plain JavaScript. Every page is prerendered at build time for search engines and
link previews. No server, no database.

## Run it

```bash
npm ci
npm run dev     # http://localhost:5173 with live reload
npm run check   # ESLint + production build (must pass before a commit)
npm run preview # serve the built site
```

## Add an item

Items live in `src/content/items.js`. Each change is a pull request, so you can check it on the deploy preview before
it goes live.

1. Copy an existing entry and give it a new `id` (lowercase words and dashes, e.g. `power-bank-20000`). The id is the
   address, `/item/power-bank-20000`, so don't change it once the item is live.
2. Fill in `name`, `category` (`products`, `gift-cards` or `airtime`), a one-line `summary`, and `description`
   paragraphs.
3. Price, in US dollars: either `price: 18`, or `options` when there's a choice (amounts for gift cards and airtime,
   sizes or colours for products), each with its own price:
   ```js
   options: { label: "Amount", choices: [{ label: "$5", price: 5 }, { label: "$10", price: 10 }] },
   ```
4. `delivery`: `"digital"` for codes we send on WhatsApp, `"physical"` for things we deliver or the buyer collects.
5. `status`: `"available"`, or `"sold-out"` to keep it on the site without the order button.
6. Photos (optional but best): put them in `public/items/<id>/` as `1.jpg`, `2.jpg` … and list them:
   `photos: ["/items/power-bank-20000/1.jpg"]`. Without photos the site draws a picture from `art`
   (`giftcard`, `airtime`, `powerbank`, `charger`, `earbuds`, `lantern`, `box`).
7. Leave out `example` (or set it to `false`). `featured: true` puts the item on the home page.

Photo rules: use your own photos, or product photos the maker or distributor gives sellers to use. Never copy a photo
from another shop or website. Landscape 4:3 works best (for example 1600 × 1200), JPG, under about 300 KB each. Don't
use other companies' logos as decoration; a brand name in the item name is fine when you're selling that brand's card
or product.

## Example items

The six items in the shop today are examples (`example: true`). They're labelled "Example", can't be ordered, and are
kept out of search results and the sitemap. Delete them once real items are in: the "opening soon" note disappears by
itself when no examples are left.

## Orders

Orders go to the WhatsApp number in `src/config.js` (`whatsapp`, digits only). The message lists the item, option,
quantity, total and a link back to the item. Prices on the site are the item price: confirm the total, delivery and
how to pay in the chat.

## Deploy (Netlify)

1. In Netlify: **Add new site → Import from Git →** `global-alfabet/alfa-shop`. The build settings come from
   `netlify.toml` (`npm run build`, publish `dist`).
2. **Domain management → Add domain:** `shop.globalalfabet.com`, then add the DNS record Netlify shows (a CNAME to the
   site's `.netlify.app` address).
3. Once it's live, link it from globalalfabet.com (`productLinks["alfa-shop"]` in that site's `src/config.js`).

`main` deploys; pull requests get a deploy preview.

## Files

```
src/config.js              WhatsApp number, email, links
src/content/items.js       everything for sale
src/content/categories.js  the three sections and the two delivery types
src/content/ordering.js    the ordering steps and questions on /how-to-order
src/components/ItemArt.jsx drawings shown when an item has no photos
src/lib/whatsapp.js        the order message
src/lib/seo.js             titles, descriptions, structured data, sitemap, llms.txt
scripts/prerender.js       writes each page as HTML after the build
public/                    logos from the brand kit (github.com/global-alfabet/brand) and the share image (og.png)
```

## Later

- Other sellers' listings, with their own storefronts.
- A bag for ordering several items in one message.
- Sign-in with the Global Alfabet Account.
