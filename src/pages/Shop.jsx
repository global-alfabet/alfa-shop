import { useEffect, useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import ItemCard from "../components/ItemCard.jsx";
import ExampleNote from "../components/ExampleNote.jsx";
import { items } from "../content/items.js";
import { categories, categoryBySlug } from "../content/categories.js";
import { searchItems } from "../lib/search.js";

// /shop lists everything; /<section> (e.g. /gift-cards) one section. ?q= narrows it down by words.
export default function Shop({ category }) {
  const cat = category ? categoryBySlug[category] : null;
  const [params, setParams] = useSearchParams();

  // Built pages are made without a search, so the search box starts empty and picks up ?q= once the page is running.
  const [query, setQuery] = useState("");
  useEffect(() => setQuery(params.get("q") || ""), [params]);

  const inSection = cat ? items.filter((i) => i.category === cat.slug) : items;
  const shown = searchItems(inSection, query);

  function onSearch(e) {
    const q = e.target.value;
    setQuery(q);
    setParams(q ? { q } : {}, { replace: true });
  }

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h1>{cat ? cat.name : "Shop all"}</h1>
          <p className="lead">
            {cat ? cat.line : "Products we deliver, and gift cards and airtime delivered digitally."}
          </p>
        </div>

        <div className="shop-tools">
          <label className="searchbar">
            <Icon name="search" size={18} />
            <span className="visually-hidden">Search {cat ? cat.name.toLowerCase() : "the shop"}</span>
            <input
              type="search"
              value={query}
              onChange={onSearch}
              placeholder={cat ? `Search ${cat.name.toLowerCase()}` : "Search the shop"}
              autoComplete="off"
            />
          </label>
          <nav className="filter-chips" aria-label="Sections">
            <NavLink to="/shop" end className="filter-chip">
              All
            </NavLink>
            {categories.map((c) => (
              <NavLink key={c.slug} to={`/${c.slug}`} className="filter-chip">
                {c.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <ExampleNote />

        <p className="result-count" aria-live="polite">
          {shown.length} {shown.length === 1 ? "item" : "items"}
          {query ? ` for “${query}”` : ""}
        </p>

        {shown.length ? (
          <div className="item-grid">
            {shown.map((item, i) => (
              <ItemCard key={item.id} item={item} eager={i < 3} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>Nothing matches “{query}”.</h2>
            <p className="muted">
              Try fewer words, or <Link to="/shop">look through everything</Link>. If you can't find it, get in touch
              and ask us.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
