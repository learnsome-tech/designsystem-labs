import React from "react";
import { renderToString } from "react-dom/server";
const Dialog = ({ id, alert, title, desc }: any) => (
  <div
    role={alert ? "alertdialog" : "dialog"}
    aria-modal="true"
    aria-labelledby={`${id}-t`}
    aria-describedby={`${id}-d`}
  >
    <h2 id={`${id}-t`}>{title}</h2>
    <p id={`${id}-d`}>{desc}</p>
  </div>
);
const m = renderToString(<Dialog id="m1" title="Profile" desc="Edit" />);
const a = renderToString(<Dialog id="a1" alert title="Delete" desc="Warn" />);
console.log(`Modal role: ${m.includes('role="dialog"')}`);
console.log(`Alert role: ${a.includes('role="alertdialog"')}`);
console.log(`Aria modal: ${m.includes('aria-modal="true"')}`);
console.log(`Labelled by: ${m.includes('aria-labelledby="m1-t"')}`);
console.log(`Described by: ${a.includes('aria-describedby="a1-d"')}`);
