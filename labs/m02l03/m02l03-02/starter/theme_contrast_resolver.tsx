import "./dom-shim";
type Theme = "light" | "dark" | "high-contrast";
function resolveTheme(pref: string, sysDark: boolean, hc: boolean): Theme {
  if (hc) return "high-contrast";
  if (pref === "system") return sysDark ? "dark" : "light";
  return pref as Theme;
}
function applyTheme(root: HTMLElement, theme: Theme) {
  root.setAttribute("data-theme", theme);
  root.classList.toggle("dark", theme === "dark");
}
const root = document.createElement("div");
const t1 = resolveTheme("system", true, false);
applyTheme(root, t1);
console.log(`Resolved: ${t1}`);
console.log(`Class: ${root.className}`);
const t2 = resolveTheme("light", false, true);
applyTheme(root, t2);
console.log(`High contrast: ${t2}`);
console.log(`Theme attr: ${root.getAttribute("data-theme")}`);
