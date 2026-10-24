import { Link } from "react-router-dom";
import ItemArt from "./ItemArt.jsx";
import { asset } from "../lib/asset.js";
import { money } from "../lib/money.js";
import { fromPrice } from "../content/items.js";
import { categoryBySlug, deliveryTypes } from "../content/categories.js";

export function ItemPicture({ item, eager = false }) {
  if (item.photos?.length)
    return (
      <img
        className="item-photo"
        src={asset(item.photos[0])}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    );
  return <ItemArt art={item.art} />;
}

export default function ItemCard({ item, eager }) {
  const price = fromPrice(item);
  return (
    <Link to={`/item/${item.id}`} className="item-card">
      <div className="item-card-art">
        <ItemPicture item={item} eager={eager} />
        <div className="item-card-tags">
          {item.example && <span className="tag tag-example">Example</span>}
          {item.status === "sold-out" && <span className="tag">Sold out</span>}
        </div>
      </div>
      <div className="item-card-body">
        <span className="item-card-cat">{categoryBySlug[item.category]?.name}</span>
        <h3>{item.name}</h3>
        <p className="item-card-sum">{item.summary}</p>
        <div className="item-card-foot">
          <span className="price">
            {item.options ? "From " : ""}
            {money(price)}
          </span>
          <span className="item-card-delivery">{deliveryTypes[item.delivery]?.label}</span>
        </div>
      </div>
    </Link>
  );
}
