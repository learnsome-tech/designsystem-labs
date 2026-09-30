class Roving {
  idx = 0;
  next(len: number) { this.idx = (this.idx + 1) % len; }
  tab(i: number) { return this.idx === i ? 0 : -1; }
}
const r = new Roving();
console.log(`Roving 0: ${r.tab(0)}`);
console.log(`Roving 1: ${r.tab(1)}`);
r.next(3);
console.log(`After next, Roving 1: ${r.tab(1)}`);

const combo = (activeId: string | null) => ({
  role: "combobox",
  "aria-activedescendant": activeId ?? undefined,
});
console.log(`Virtual none: ${combo(null)["aria-activedescendant"]}`);
console.log(`Virtual active: ${combo("opt-1")["aria-activedescendant"]}`);
