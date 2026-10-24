import { categories } from "../content/categories.js";

// Simple search: every word must appear in the item's name, summary, category or option labels.
const words = (s) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);

function haystack(item) {
  const cat = categories.find((c) => c.slug === item.category);
  return words(
    [item.name, item.summary, cat?.name, ...(item.options?.choices.map((c) => c.label) || [])].join(" "),
  ).join(" ");
}

export function searchItems(items, query) {
  const q = words(query || "");
  if (!q.length) return items;
  return items.filter((item) => {
    const text = haystack(item);
    return q.every((w) => text.includes(w) || (w.endsWith("s") && text.includes(w.slice(0, -1))));
  });
}
