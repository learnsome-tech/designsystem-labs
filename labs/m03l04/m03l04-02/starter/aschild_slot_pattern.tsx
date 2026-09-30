import React from "react";
import { renderToString } from "react-dom/server";
function Slot({ children, className = "", ...props }: any) {
  if (!React.isValidElement(children)) return null;
  const child = children as React.ReactElement<any>;
  const cls = [className, child.props.className].filter(Boolean).join(" ");
  return React.cloneElement(child, {
    ...props, ...child.props, className: cls
  });
}
function Button({ asChild, className = "btn", children, ...props }: any) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={className} {...props}>{children}</Comp>;
}
const native = renderToString(<Button id="b1">Click</Button>);
const link = renderToString(
  <Button asChild className="btn-pri"><a href="/home">Home</a></Button>
);
console.log(`Native: ${native}`);
console.log(`Has button: ${link.includes("<button")}`);
console.log(`Has anchor: ${link.includes("<a ")}`);
console.log(`Merged class: ${link.includes('class="btn-pri"')}`);
