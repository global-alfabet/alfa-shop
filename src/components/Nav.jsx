import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";
import { asset } from "../lib/asset.js";
import { askMessage, whatsappLink } from "../lib/whatsapp.js";

const links = [
  { to: "/shop", label: "Shop all", end: true },
  { to: "/products", label: "Products" },
  { to: "/gift-cards", label: "Gift cards" },
  { to: "/airtime", label: "Airtime" },
  { to: "/how-to-order", label: "How to order" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <header className={`nav${open ? " is-open" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand" aria-label="Alfa Shop home">
          <img src={asset("/alfa-shop-lockup-light.svg")} alt="Alfa Shop" width="98" height="26" />
        </Link>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="nav-link">
              {l.label}
            </NavLink>
          ))}
        </nav>
        <a className="btn btn-small nav-cta" href={whatsappLink(askMessage())} target="_blank" rel="noreferrer">
          <Icon name="chat" size={16} />
          WhatsApp us
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>
      <nav className="nav-sheet" aria-label="Mobile">
        {links.map((l) => (
          <Link key={l.to} to={l.to}>
            {l.label}
          </Link>
        ))}
        <a href={whatsappLink(askMessage())} target="_blank" rel="noreferrer">
          WhatsApp us
        </a>
      </nav>
    </header>
  );
}
