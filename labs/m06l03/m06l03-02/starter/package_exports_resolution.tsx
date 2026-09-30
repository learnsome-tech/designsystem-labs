interface ExportEntry { import: string; require: string; types: string; }
function resolve(entry: ExportEntry, cond: "import" | "require" | "types") {
  return entry[cond];
}
const pkg = {
  name: "@ds/core",
  sideEffects: ["*.css"],
  exports: {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/index.mjs",
      require: "./dist/index.cjs",
    },
  },
};
const root = pkg.exports["."];
console.log(`Package: ${pkg.name}`);
console.log(`ESM target: ${resolve(root, "import")}`);
console.log(`CJS target: ${resolve(root, "require")}`);
console.log(`Types target: ${resolve(root, "types")}`);
console.log(`Side effect css: ${pkg.sideEffects.includes("*.css")}`);
