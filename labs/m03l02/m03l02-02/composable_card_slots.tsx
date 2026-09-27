import React from "react";
import { renderToString } from "react-dom/server";
function Card({ children }: { children: React.ReactNode }) {
  return <div className="card-box">{children}</div>;
}
function CardTitle({ text }: { text: string }) {
  return <h3 className="card-h">{text}</h3>;
}
function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="card-p">{children}</div>;
}
const html = renderToString(
  <Card>
    <CardTitle text="Design Systems" />
    <CardBody>Composable slots replace boolean flags.</CardBody>
  </Card>
);
console.log(`Has box: ${html.includes("card-box")}`);
console.log(`Has heading: ${html.includes("card-h")}`);
console.log(`Contains title: ${html.includes("Design Systems")}`);
console.log(`Contains text: ${html.includes("Composable slots")}`);
