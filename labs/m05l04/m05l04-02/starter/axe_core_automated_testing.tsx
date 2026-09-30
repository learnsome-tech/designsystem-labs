import "./dom-shim";
import axe from "axe-core";
const div = document.createElement("div");
div.innerHTML = "<button>Submit</button><button></button>";
document.body.appendChild(div);
const res = await axe.run(div, {
  runOnly: { type: "rule", values: ["button-name"] },
});
console.log(`Violations: ${res.violations.length}`);
console.log(`Rule: ${res.violations[0]?.id}`);
console.log(`Impact: ${res.violations[0]?.impact}`);
console.log(`Nodes: ${res.violations[0]?.nodes.length}`);
console.log(`Passes: ${res.passes.length}`);
