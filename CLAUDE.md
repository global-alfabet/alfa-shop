# shop.globalalfabet.com: guide for Claude Code

Alfa Shop is a Global Alfabet product: Global Alfabet's own products, gift cards and airtime, ordered on WhatsApp.
Version 1 is frontend only (React 18 + Vite + react-router, plain JavaScript), prerendered at build time. No cart,
checkout, payments, accounts or server. Other sellers' listings come later.

## Layout
```
src/config.js               WhatsApp number, email and links (edit content here, not in components)
src/content/items.js        everything for sale. Today: labelled EXAMPLES only (see rules)
src/content/categories.js   sections (products, gift-cards, airtime) and delivery types (digital, physical)
src/content/ordering.js     ordering steps and FAQ
src/components/ItemArt.jsx  drawn item pictures, used when an item has no photos
src/lib/whatsapp.js         the prefilled order message
src/lib/seo.js              title, description, canonical, share image and JSON-LD for every page; sitemap; llms.txt
scripts/prerender.js        build step: writes each page as HTML (src/entry-server.jsx), 404.html, sitemap.xml, llms.txt
src/pages/                  Home, Shop (all + each section), Item, HowToOrder, Privacy, NotFound
src/styles/site.css         all styles; brand tokens at the top
public/                     logos from the brand kit (github.com/global-alfabet/brand). Don't redraw them here
```

## Commands
- `npm run dev`: live reload at http://localhost:5173
- `npm run check`: ESLint + production build. Must pass before any commit.

## Rules
- Design language: the Global Alfabet look, based on business.apple.com. White and #f5f5f7 sections, Inter, large
  confident headings, pill buttons, rounded 28px cards. Alfa Shop violet is the one accent: `--accent` for fills and
  icons, `--accent-strong` for text and buttons. No new colours (drawings use the same tokens plus the yellow window).
- Product names are always written in full: Alfa Shop, Alfa Maps, Alfa Finda, Global Alfabet Account.
- Items must be honest:
  - Example items have `example: true`, are labelled "Example" everywhere, can't be ordered, and stay out of search
    results (noindex) and the sitemap.
  - Real items come from Julius. Only list what Global Alfabet actually sells, at the price Julius gives.
  - Never invent ratings, reviews, stock counts, discounts, "verified" or "best seller" badges.
  - Product structured data (JSON-LD) is only for real items.
- Photos: Julius's own, or images the maker or distributor provides for sellers. Never copy a photo from another
  shop or website. No third-party logos as decoration.
- Only claim what happens today: orders are WhatsApp messages; payment and delivery are agreed in the chat. Don't
  name payment methods, delivery areas or times unless Julius confirms them.
- Section slugs are top-level addresses (/products, /gift-cards, /airtime): a new one must not clash with another page.
- SEO: components must render the same on the server and in the browser. Read `window`, `document` or the search
  query only inside effects. A new page needs an entry in `pages` in `src/lib/seo.js` (title under 60 characters,
  description under 160).
- Check layout at 1440px and 390px wide. No horizontal scrolling on phones.
- Never commit secrets. This site has none and needs none.
- Work on a branch and open a pull request. Julius approves every merge; `main` deploys to Netlify.
- Commit messages: conventional style, e.g. `feat(items): add 20,000 mAh power bank`, `fix(item): option reset`.
