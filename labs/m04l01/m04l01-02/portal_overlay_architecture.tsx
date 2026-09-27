import "./dom-shim";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
function Overlay({ open, children }: any) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    document.getElementById("root")?.setAttribute("inert", "");
  }, [open]);
  if (!open) return null;
  return createPortal(<div id="m">{children}</div>, document.body);
}
const main = document.getElementById("root")!;
const root = createRoot(main);
root.render(<Overlay open={true}>Modal Content</Overlay>);
await new Promise((r) => setTimeout(r, 40));
console.log(`Body scroll: ${document.body.style.overflow}`);
console.log(`Root inert: ${main.hasAttribute("inert")}`);
console.log(`Portal mounted: ${!!document.body.querySelector("#m")}`);
console.log(`Modal text: ${document.querySelector("#m")?.textContent}`);
