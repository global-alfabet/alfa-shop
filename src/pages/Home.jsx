import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import ItemArt from "../components/ItemArt.jsx";
import ItemCard from "../components/ItemCard.jsx";
import ExampleNote from "../components/ExampleNote.jsx";
import { asset } from "../lib/asset.js";
import { askMessage, whatsappLink } from "../lib/whatsapp.js";
import { items } from "../content/items.js";
import { categories } from "../content/categories.js";
import { steps } from "../content/ordering.js";

export default function Home() {
  const featured = items.filter((i) => i.featured).slice(0, 4);
  const count = (slug) => items.filter((i) => i.category === slug).length;

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <img className="hero-icon" src={asset("/alfa-shop-icon.svg")} alt="" width="88" height="88" />
          <p className="eyebrow">Alfa Shop</p>
          <h1>
            See it here.
            <br />
            Order on WhatsApp.
          </h1>
          <p className="lead">
            Products, gift cards and airtime from Global Alfabet. Pick what you want and send us the order in one tap.
            No account, no checkout.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/shop">
              Shop all
            </Link>
            <Link className="text-link" to="/how-to-order">
              How ordering works <Icon name="chevron" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section tight-top">
        <div className="container">
          <ExampleNote />
          <ul className="cat-cards">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.slug}`} className="cat-card">
                  <div className="cat-card-art">
                    <ItemArt art={c.art} />
                  </div>
                  <div className="cat-card-body">
                    <h2>{c.name}</h2>
                    <p className="muted">{c.line}</p>
                    <span className="meta">
                      {count(c.slug)} {count(c.slug) === 1 ? "item" : "items"}
                      <Icon name="chevron" size={14} />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="section section-soft">
          <div className="container">
            <div className="section-head left">
              <div>
                <h2>Featured</h2>
                <p className="muted">A few things we'd start with.</p>
              </div>
              <Link className="text-link" to="/shop">
                Shop all <Icon name="chevron" size={16} />
              </Link>
            </div>
            <div className="item-grid">
              {featured.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <h2>Ordering takes one message.</h2>
            <p className="lead">There's no account to make and no card to enter on this site.</p>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="center cta-block">
            <h3>Have a question first?</h3>
            <p className="muted">Ask us on WhatsApp about an item, stock or delivery.</p>
            <a className="btn" href={whatsappLink(askMessage())} target="_blank" rel="noreferrer">
              <Icon name="chat" size={18} />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
