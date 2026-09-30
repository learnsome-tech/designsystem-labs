interface Token { $value: string; $type?: string; }
const tokens: Record<string, Token> = {
  "global.blue.500": { $value: "#3b82f6", $type: "color" },
  "semantic.action.bg": { $value: "{global.blue.500}" },
  "component.btn.primary": { $value: "{semantic.action.bg}" },
};
function resolve(path: string, depth = 0): string {
  if (depth > 5) throw new Error("Circular alias");
  const val = tokens[path]?.$value;
  if (!val) throw new Error("Missing token");
  const m = val.match(/^\{([^}]+)\}$/);
  return m ? resolve(m[1], depth + 1) : val;
}
const globalVal = resolve("global.blue.500");
const semanticVal = resolve("semantic.action.bg");
const componentVal = resolve("component.btn.primary");

console.log(`Global raw token: ${globalVal}`);
console.log(`Semantic alias resolved: ${semanticVal}`);
console.log(`Component token resolved: ${componentVal}`);
console.log(`Tier chain matches: ${globalVal === componentVal}`);
