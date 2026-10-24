import { Link } from "react-router-dom";
import { site } from "../config.js";
import { categories } from "../content/categories.js";
import { asset } from "../lib/asset.js";
import { askMessage, whatsappLink } from "../lib/whatsapp.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cols">
          <div>
            <h3>Shop</h3>
            <ul>
              <li>
                <Link to="/shop">Shop all</Link>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link to={`/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Help</h3>
            <ul>
              <li>
                <Link to="/how-to-order">How to order</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Global Alfabet</h3>
            <ul>
              <li>
                <a href={site.parent.url}>About Global Alfabet</a>
              </li>
              <li>
                <a href={site.maps}>Alfa Maps</a>
              </li>
              <li>
                <a href={site.finda}>Alfa Finda</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Talk to us</h3>
            <ul>
              <li>
                <a href={whatsappLink(askMessage())} target="_blank" rel="noreferrer">
                  WhatsApp {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <img src={asset("/global-alfabet-glyph-black.svg")} alt="" width="22" height="14" />
          <span>
            Alfa Shop is a <a href={site.parent.url}>{site.parent.name}</a> product. Prices are in US dollars.
          </span>
          <span className="footer-note">Items marked Example show how the shop will look and can't be ordered.</span>
        </div>
      </div>
    </footer>
  );
}
