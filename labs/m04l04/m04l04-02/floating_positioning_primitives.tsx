interface Rect { y: number; h: number; }
function computePlacement(ref: Rect, floatH: number, maxH: number) {
  const wouldOverflow = ref.y + ref.h + floatH > maxH;
  const placement = wouldOverflow ? "top" : "bottom";
  const y = placement === "top" ? ref.y - floatH : ref.y + ref.h;
  return { placement, y };
}
const normal = computePlacement({ y: 100, h: 40 }, 50, 600);
const flipped = computePlacement({ y: 550, h: 40 }, 50, 600);
const tipProps = (id: string) => ({ "aria-describedby": id });
const popProps = (id: string, open: boolean) => ({
  "aria-haspopup": "dialog",
  "aria-expanded": open,
});
console.log(`Normal: ${normal.placement} at y=${normal.y}`);
console.log(`Flipped: ${flipped.placement} at y=${flipped.y}`);
console.log(`Tooltip attr: ${tipProps("t1")["aria-describedby"]}`);
console.log(`Popover popup: ${popProps("p1", true)["aria-haspopup"]}`);
console.log(`Popover open: ${popProps("p1", true)["aria-expanded"]}`);
