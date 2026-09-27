import "./dom-shim";
function createRegion(mode: "polite" | "assertive") {
  const el = document.createElement("div");
  el.setAttribute("role", mode === "assertive" ? "alert" : "status");
  el.setAttribute("aria-live", mode);
  el.setAttribute("aria-atomic", "true");
  document.body.appendChild(el);
  return el;
}
const polite = createRegion("polite");
const alert = createRegion("assertive");
polite.textContent = "Saved to cloud";
alert.textContent = "Connection lost";
console.log(`Polite role: ${polite.getAttribute("role")}`);
console.log(`Polite live: ${polite.getAttribute("aria-live")}`);
console.log(`Polite atomic: ${polite.getAttribute("aria-atomic")}`);
console.log(`Polite text: ${polite.textContent}`);
console.log(`Alert role: ${alert.getAttribute("role")}`);
console.log(`Alert live: ${alert.getAttribute("aria-live")}`);
console.log(`Alert text: ${alert.textContent}`);
