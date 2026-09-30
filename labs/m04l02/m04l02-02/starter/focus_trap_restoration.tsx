import "./dom-shim";
const prev = document.createElement("button");
document.body.appendChild(prev);
prev.focus();
console.log(`Initial focus: ${document.activeElement === prev}`);
const trap = document.createElement("div");
const b1 = document.createElement("button");
const b2 = document.createElement("button");
trap.append(b1, b2);
document.body.appendChild(trap);
b1.focus();
console.log(`Trap initial: ${document.activeElement === b1}`);
function handleTab(shift: boolean) {
  if (shift && document.activeElement === b1) b2.focus();
  else if (!shift && document.activeElement === b2) b1.focus();
}
b2.focus();
handleTab(false);
console.log(`Wrapped forward: ${document.activeElement === b1}`);
prev.focus();
console.log(`Restored focus: ${document.activeElement === prev}`);
