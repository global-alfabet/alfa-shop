import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { items } from "../content/items.js";

// Shown while the shop still has example items. Delete it (and its uses) once every item is real.
export default function ExampleNote() {
  if (!items.some((i) => i.example)) return null;
  return (
    <p className="example-note">
      <Icon name="info" size={18} />
      <span>
        Alfa Shop is opening soon. Items marked Example show how the shop will look and can't be ordered yet.{" "}
        <Link to="/how-to-order">How ordering will work</Link>
      </span>
    </p>
  );
}
