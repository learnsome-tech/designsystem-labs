import React, { createContext, useContext } from "react";
import { renderToString } from "react-dom/server";
const Ctx = createContext("tab1");
const Tabs = ({ children }: any) => (
  <Ctx.Provider value="tab1">{children}</Ctx.Provider>
);
const Trigger = ({ value, label }: any) => {
  const sel = useContext(Ctx) === value;
  return <button role="tab" aria-selected={sel}>{label}</button>;
};
const Panel = ({ value, text }: any) =>
  useContext(Ctx) === value ? <div role="tabpanel">{text}</div> : null;
const html = renderToString(
  <Tabs>
    <Trigger value="tab1" label="One" />
    <Panel value="tab1" text="Panel One" />
  </Tabs>
);
console.log(`Tab role: ${html.includes('role="tab"')}`);
console.log(`Selected: ${html.includes('aria-selected="true"')}`);
console.log(`Panel role: ${html.includes('role="tabpanel"')}`);
console.log(`Panel text: ${html.includes("Panel One")}`);
