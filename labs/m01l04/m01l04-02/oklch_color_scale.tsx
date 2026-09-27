interface Oklch { l: number; c: number; h: number; }
function formatColor(o: Oklch): string {
  return `oklch(${Math.round(o.l * 100)}% ${o.c.toFixed(2)} ${o.h})`;
}
function generateScale(hue: number): Record<string, string> {
  const scale: Record<string, string> = {};
  for (const s of [100, 500, 900]) {
    const l = 1 - s / 1000;
    const c = 0.15 * Math.sin(Math.PI * l);
    scale[`step-${s}`] = formatColor({ l, c, h: hue });
  }
  return scale;
}
const palette = generateScale(240);
const light = palette["step-100"];
const mid = palette["step-500"];
const dark = palette["step-900"];

console.log(`Light token: ${light}`);
console.log(`Midtone token: ${mid}`);
console.log(`Dark token: ${dark}`);
console.log(`Uniform curve: ${light.includes("90%") && dark.includes("10%")}`);
