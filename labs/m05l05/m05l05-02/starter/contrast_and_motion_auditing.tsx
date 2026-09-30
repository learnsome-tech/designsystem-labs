function lum(r: number, g: number, b: number) {
  const [rs, gs, bs] = [r, g, b].map((c) => (c / 255) ** 2.2);
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}
function contrast(l1: number, l2: number) {
  return ((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)).toFixed(2);
}
const motion = (reduced: boolean) => ({
  duration: reduced ? "0ms" : "250ms",
  transition: reduced ? "none" : "transform 250ms ease",
});
const white = lum(255, 255, 255);
const black = lum(0, 0, 0);
const blue = lum(37, 99, 235);
console.log(`White on black: ${contrast(white, black)}:1`);
console.log(`Blue on white: ${contrast(white, blue)}:1`);
console.log(`Full motion: ${motion(false).duration}`);
console.log(`Reduced motion: ${motion(true).duration}`);
console.log(`Reduced transition: ${motion(true).transition}`);
