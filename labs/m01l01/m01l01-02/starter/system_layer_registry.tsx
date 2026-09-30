interface NodeDef { id: string; layer: number; deps: string[]; }
class SystemArchitecture {
  private map = new Map<string, NodeDef>();
  add(node: NodeDef) {
    for (const d of node.deps) {
      const dep = this.map.get(d);
      if (dep && dep.layer >= node.layer) throw new Error("Layer inversion");
    }
    this.map.set(node.id, node);
  }
}
const sys = new SystemArchitecture();
sys.add({ id: "token.color", layer: 0, deps: [] });
sys.add({ id: "button.atom", layer: 1, deps: ["token.color"] });

let caught = false;
try {
  sys.add({ id: "token.bad", layer: 0, deps: ["button.atom"] });
} catch { caught = true; }

console.log("Tokens layer registered: true");
console.log(`Layer inversion rejected: ${caught}`);
