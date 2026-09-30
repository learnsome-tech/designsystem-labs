interface Item { id: string; disabled?: boolean; }
class MenuNav {
  idx = 0;
  constructor(public items: Item[]) {}
  next() {
    do { this.idx = (this.idx + 1) % this.items.length; }
    while (this.items[this.idx].disabled);
    return this.items[this.idx].id;
  }
}
const menu = new MenuNav([
  { id: "edit" },
  { id: "copy", disabled: true },
  { id: "share" },
  { id: "delete" },
]);
console.log(`Initial: ${menu.items[menu.idx].id}`);
console.log(`Next (skips disabled): ${menu.next()}`);
console.log(`Next again: ${menu.next()}`);
console.log(`Wrap around: ${menu.next()}`);
