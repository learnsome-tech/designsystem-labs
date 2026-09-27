type Ver = [number, number, number];
type Bump = "patch" | "minor" | "major";
function bump(v: Ver, type: Bump): Ver {
  if (type === "major") return [v[0] + 1, 0, 0];
  if (type === "minor") return [v[0], v[1] + 1, 0];
  return [v[0], v[1], v[2] + 1];
}
const warned = new Set<string>();
function deprecate(component: string, prop: string) {
  if (warned.has(`${component}:${prop}`)) return false;
  warned.add(`${component}:${prop}`);
  return true;
}
const v0: Ver = [1, 2, 3];
console.log(`Patch: ${bump(v0, "patch").join(".")}`);
console.log(`Minor: ${bump(v0, "minor").join(".")}`);
console.log(`Major: ${bump(v0, "major").join(".")}`);
console.log(`First deprecation: ${deprecate("Button", "isPrimary")}`);
console.log(`Second skipped: ${!deprecate("Button", "isPrimary")}`);
