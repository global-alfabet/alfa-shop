// Prices are US dollars (site.currency). Whole amounts show without cents: $25, $9.50.
export function money(amount) {
  const whole = Number.isInteger(amount);
  return `$${amount.toLocaleString("en-US", { minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2 })}`;
}
