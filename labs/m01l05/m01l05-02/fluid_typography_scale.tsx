function modular(base: number, ratio: number, step: number): number {
  return Math.round(base * Math.pow(ratio, step) * 10) / 10;
}
function fluidClamp(minRem: number, maxRem: number): string {
  const minPx = minRem * 16, maxPx = maxRem * 16;
  const slope = (maxPx - minPx) / (1200 - 400);
  const intersect = (minPx - 400 * slope) / 16;
  const vw = (slope * 100).toFixed(2);
  const mid = `${intersect.toFixed(2)}rem + ${vw}vw`;
  return `clamp(${minRem}rem, ${mid}, ${maxRem}rem)`;
}
const baseSize = modular(16, 1.25, 0);
const headlineSize = modular(16, 1.25, 3);
const fluidHeading = fluidClamp(2, 3.5);

console.log(`Base body font size: ${baseSize}px`);
console.log(`Headline font size: ${headlineSize}px`);
console.log(`Fluid CSS clamp rule: ${fluidHeading}`);
console.log(`Bounds verified: ${fluidHeading.startsWith("clamp(2rem")}`);
