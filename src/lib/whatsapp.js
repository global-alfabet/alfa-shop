import { site } from "../config.js";
import { deliveryTypes } from "../content/categories.js";
import { money } from "./money.js";

// Orders arrive as a WhatsApp message to Global Alfabet. The message is written for the buyer, ready to send.
export const whatsappLink = (text) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** The order message for one item: what it is, the option, quantity, total and a link back to the item. */
export function orderMessage(item, { choice, quantity = 1 }) {
  const unit = choice ? choice.price : item.price;
  const lines = [
    "Hi Global Alfabet, I'd like to order from Alfa Shop:",
    "",
    `${item.name}${choice ? ` (${item.options.label}: ${choice.label})` : ""}`,
    `Quantity: ${quantity}`,
    `Total: ${money(unit * quantity)}`,
    `${site.url}/item/${item.id}`,
    "",
    item.delivery === "digital"
      ? "Please send it to this WhatsApp number."
      : `${deliveryTypes.physical.label} (tell us your area): `,
  ];
  return lines.join("\n");
}

/** A general question, e.g. from the home page or an item that can't be ordered yet. */
export const askMessage = (about) =>
  about
    ? `Hi Global Alfabet, I have a question about ${about} on Alfa Shop.`
    : "Hi Global Alfabet, I have a question about Alfa Shop.";
