import "./dom-shim";
interface Story<T> {
  args: T;
  play?: (el: HTMLElement) => void;
}
const render = (args: { label: string; disabled?: boolean }) => {
  const b = document.createElement("button");
  b.textContent = args.label;
  b.disabled = !!args.disabled;
  return b;
};
const story: Story<{ label: string; disabled?: boolean }> = {
  args: { label: "Checkout", disabled: false },
  play: (btn) => { btn.click(); },
};
const btn = render(story.args);
story.play?.(btn);
console.log(`Rendered tag: ${btn.tagName.toLowerCase()}`);
console.log(`Button label: ${btn.textContent}`);
console.log(`Button disabled: ${btn.disabled}`);
console.log(`Play executed: ${typeof story.play === "function"}`);
