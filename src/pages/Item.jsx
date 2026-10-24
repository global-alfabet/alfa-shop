import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import ItemCard, { ItemPicture } from "../components/ItemCard.jsx";
import NotFound from "./NotFound.jsx";
import { asset } from "../lib/asset.js";
import { money } from "../lib/money.js";
import { askMessage, orderMessage, whatsappLink } from "../lib/whatsapp.js";
import { items, itemById, canOrder } from "../content/items.js";
import { categoryBySlug, deliveryTypes } from "../content/categories.js";

const MAX_QUANTITY = 10;

// A fresh view per item, so the chosen option and quantity reset when moving to another item.
export default function Item() {
  const { id } = useParams();
  return <ItemView key={id} id={id} />;
}

function ItemView({ id }) {
  const item = itemById[id];
  const [choiceIndex, setChoiceIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!item) return <NotFound />;

  const cat = categoryBySlug[item.category];
  const choice = item.options ? item.options.choices[choiceIndex] : null;
  const unit = choice ? choice.price : item.price;
  const delivery = deliveryTypes[item.delivery];
  const orderable = canOrder(item);
  const more = items.filter((i) => i.category === item.category && i.id !== item.id).slice(0, 3);
  const photos = item.photos || [];

  return (
    <div className="page">
      <div className="container">
        <Link className="back-link" to={`/${cat.slug}`}>
          <Icon name="back" size={16} />
          {cat.name}
        </Link>

        <div className="item-layout">
          <div className="item-gallery">
            <div className="item-gallery-main">
              {photos.length ? (
                <img className="item-photo" src={asset(photos[photoIndex])} alt={item.name} />
              ) : (
                <ItemPicture item={item} eager />
              )}
            </div>
            {photos.length > 1 && (
              <div className="item-thumbs" role="group" aria-label="Photos">
                {photos.map((p, i) => (
                  <button
                    key={p}
                    type="button"
                    className={`item-thumb${i === photoIndex ? " is-active" : ""}`}
                    aria-label={`Photo ${i + 1} of ${photos.length}`}
                    aria-pressed={i === photoIndex}
                    onClick={() => setPhotoIndex(i)}
                  >
                    <img src={asset(p)} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="item-info">
            <p className="eyebrow">{cat.name}</p>
            <h1>{item.name}</h1>
            {(item.example || item.status === "sold-out") && (
              <div className="item-tags">
                {item.example && <span className="tag tag-example">Example</span>}
                {item.status === "sold-out" && <span className="tag">Sold out</span>}
              </div>
            )}
            <p className="item-price">
              {money(unit)}
              {quantity > 1 && (
                <span className="item-total">
                  {" "}
                  · {money(unit * quantity)} for {quantity}
                </span>
              )}
            </p>
            <p className="lead item-summary">{item.summary}</p>

            {item.options && (
              <fieldset className="option-group">
                <legend>{item.options.label}</legend>
                <div className="option-pills">
                  {item.options.choices.map((c, i) => (
                    <label key={c.label} className={`option-pill${i === choiceIndex ? " is-active" : ""}`}>
                      <input
                        type="radio"
                        name="option"
                        value={i}
                        checked={i === choiceIndex}
                        onChange={() => setChoiceIndex(i)}
                      />
                      {c.label}
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            <div className="order-row">
              <div className="stepper" role="group" aria-label="Quantity">
                <button
                  type="button"
                  aria-label="One less"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Icon name="minus" size={16} />
                </button>
                <output aria-live="polite">{quantity}</output>
                <button
                  type="button"
                  aria-label="One more"
                  disabled={quantity >= MAX_QUANTITY}
                  onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))}
                >
                  <Icon name="plus" size={16} />
                </button>
              </div>
              {orderable ? (
                <a
                  className="btn btn-order"
                  href={whatsappLink(orderMessage(item, { choice, quantity }))}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="chat" size={18} />
                  Order on WhatsApp
                </a>
              ) : (
                <button type="button" className="btn btn-order" disabled>
                  {item.example ? "Example: not for sale" : "Sold out"}
                </button>
              )}
            </div>
            <p className="order-note">
              {orderable ? (
                "Opens WhatsApp with your order written out. We reply to confirm the total and how to pay."
              ) : (
                <>
                  {item.example ? "This item shows how the shop will look. " : "We don't have this right now. "}
                  <a
                    href={whatsappLink(askMessage(item.example ? "what's in stock" : item.name))}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ask us on WhatsApp
                  </a>
                </>
              )}
            </p>

            <div className="delivery-box">
              <Icon name={item.delivery === "digital" ? "send" : "truck"} size={22} />
              <div>
                <strong>{delivery.label}</strong>
                <p className="muted">{delivery.detail}</p>
              </div>
            </div>

            {item.details?.length > 0 && (
              <dl className="details">
                {item.details.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {item.description?.length > 0 && (
              <div className="item-description">
                {item.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            )}
          </div>
        </div>

        {more.length > 0 && (
          <section className="section-block">
            <h2>More {cat.name.toLowerCase()}</h2>
            <div className="item-grid">
              {more.map((i) => (
                <ItemCard key={i.id} item={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
