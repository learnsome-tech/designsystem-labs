interface ThemeDef { colors: Record<string, string>; }
class TailwindEngine {
  vars = new Map<string, string>();
  rules = new Map<string, string>();
  loadTheme(theme: ThemeDef) {
    for (const [k, v] of Object.entries(theme.colors)) {
      this.vars.set(`--color-${k}`, v);
      this.rules.set(`bg-${k}`, `background-color: var(--color-${k});`);
      this.rules.set(`text-${k}`, `color: var(--color-${k});`);
    }
  }
}
const engine = new TailwindEngine();
engine.loadTheme({
  colors: { brand: "#2563eb", accent: "oklch(65% 0.22 140)" },
});
console.log(`Variable: ${engine.vars.get("--color-brand")}`);
console.log(`Accent: ${engine.vars.get("--color-accent")}`);
console.log(`Utility bg: ${engine.rules.get("bg-brand")}`);
console.log(`Utility text: ${engine.rules.get("text-accent")}`);
