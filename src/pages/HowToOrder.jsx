import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { steps, faq } from "../content/ordering.js";
import { deliveryTypes } from "../content/categories.js";
import { askMessage, whatsappLink } from "../lib/whatsapp.js";
import { site } from "../config.js";

export default function HowToOrder() {
  return (
    <div className="page">
      <div className="container narrow">
        <div className="page-head">
          <h1>How to order</h1>
          <p className="lead">
            Every order is a WhatsApp message to Global Alfabet on {site.phone}. There's no checkout and no account.
          </p>
        </div>

        <ol className="steps steps-list">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <section className="section-block">
          <h2>How items reach you</h2>
          <div className="delivery-cards">
            {Object.entries(deliveryTypes).map(([key, d]) => (
              <div key={key} className="delivery-box">
                <Icon name={key === "digital" ? "send" : "truck"} size={22} />
                <div>
                  <strong>{d.label}</strong>
                  <p className="muted">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="note">Every item page says which of these applies. Prices are in US dollars.</p>
        </section>

        <section className="section-block">
          <h2>Questions</h2>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <Icon name="plus" size={18} />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-block cta-inline">
          <h2>Ready to look?</h2>
          <div className="hero-actions">
            <Link className="btn" to="/shop">
              Shop all
            </Link>
            <a className="text-link" href={whatsappLink(askMessage())} target="_blank" rel="noreferrer">
              Ask us on WhatsApp <Icon name="chevron" size={16} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
