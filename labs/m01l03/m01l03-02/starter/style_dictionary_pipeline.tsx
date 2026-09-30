interface TokenDef { name: string; val: string; type: string; }
function transformToRem(t: TokenDef): TokenDef {
  if (t.val.endsWith("px")) {
    const rem = parseFloat(t.val) / 16;
    return { ...t, val: `${rem}rem` };
  }
  return t;
}
function formatCss(tokens: TokenDef[]): string {
  return `:root { ${tokens.map(t => `--${t.name}: ${t.val};`).join(" ")} }`;
}
const rawTokens: TokenDef[] = [
  { name: "color-primary", val: "#2563eb", type: "color" },
  { name: "spacing-md", val: "16px", type: "dimension" },
];
const transformed = rawTokens.map(transformToRem);
const css = formatCss(transformed);

console.log(`Original pixel value: ${rawTokens[1].val}`);
console.log(`Transformed rem value: ${transformed[1].val}`);
console.log(`CSS contains rem: ${css.includes("--spacing-md: 1rem;")}`);
