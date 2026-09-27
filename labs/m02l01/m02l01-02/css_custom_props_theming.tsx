import "./dom-shim";
interface ThemeTokens { bg: string; text: string; primary: string; }
const themes: Record<string, ThemeTokens> = {
  light: { bg: "#fff", text: "#111", primary: "#2563eb" },
  dark: { bg: "#111", text: "#fff", primary: "#60a5fa" },
};
function applyTheme(el: HTMLElement, name: "light" | "dark") {
  const t = themes[name];
  el.style.setProperty("--sys-bg", t.bg);
  el.style.setProperty("--sys-text", t.text);
  el.style.setProperty("--sys-primary", t.primary);
}
const root = document.createElement("div");
document.body.appendChild(root);
applyTheme(root, "light");
const lightBg = root.style.getPropertyValue("--sys-bg");

applyTheme(root, "dark");
const darkBg = root.style.getPropertyValue("--sys-bg");

console.log(`Light theme background: ${lightBg}`);
console.log(`Dark theme background: ${darkBg}`);
console.log(`Theme dynamically swapped: ${lightBg !== darkBg}`);
