function createDisclosure(defaultOpen = false) {
  let open = defaultOpen;
  return {
    isOpen: () => open,
    toggle: () => { open = !open; },
    getTriggerProps: () => ({
      type: "button",
      "aria-expanded": open,
      "aria-controls": "panel-1",
    }),
    getContentProps: () => ({ id: "panel-1", hidden: !open }),
  };
}
const disclosure = createDisclosure(false);
console.log(`Initial open: ${disclosure.isOpen()}`);
console.log(`Aria: ${disclosure.getTriggerProps()["aria-expanded"]}`);
console.log(`Content hidden: ${disclosure.getContentProps().hidden}`);
disclosure.toggle();
console.log(`Toggled open: ${disclosure.isOpen()}`);
console.log(`Aria now: ${disclosure.getTriggerProps()["aria-expanded"]}`);
