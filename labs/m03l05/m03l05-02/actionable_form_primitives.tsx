import React from "react";
import { renderToString } from "react-dom/server";
const Switch = ({ id, checked, label }: any) => (
  <button type="button" role="switch" id={id} aria-checked={checked}>
    {label}
  </button>
);
const Input = ({ id, label, err }: any) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} aria-invalid={!!err} aria-describedby={err ? "err" : ""} />
    {err && <span id="err" role="alert">{err}</span>}
  </div>
);
const s = renderToString(<Switch id="s1" checked={true} label="Wifi" />);
const i = renderToString(<Input id="em" label="Email" err="Required" />);
console.log(`Switch role: ${s.includes('role="switch"')}`);
console.log(`Switch checked: ${s.includes('aria-checked="true"')}`);
console.log(`Input invalid: ${i.includes('aria-invalid="true"')}`);
console.log(`Input alert: ${i.includes('role="alert"')}`);
