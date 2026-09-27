import "./dom-shim";
function getAccName(el: HTMLElement): string {
  const by = el.getAttribute("aria-labelledby");
  if (by) return document.getElementById(by)?.textContent || "";
  return el.getAttribute("aria-label") || el.textContent || "";
}
const h = document.createElement("h2");
h.id = "h1";
h.textContent = "Billing Plan";
document.body.appendChild(h);
const btn = document.createElement("button");
btn.setAttribute("aria-labelledby", "h1");
btn.setAttribute("aria-label", "Fallback");
btn.textContent = "Inner Text";
console.log(`With labelledby: ${getAccName(btn)}`);
btn.removeAttribute("aria-labelledby");
console.log(`With aria-label: ${getAccName(btn)}`);
btn.removeAttribute("aria-label");
console.log(`With inner text: ${getAccName(btn)}`);
