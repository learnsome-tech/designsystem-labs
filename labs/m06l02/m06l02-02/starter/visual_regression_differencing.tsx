function diffPixels(base: number[], curr: number[], tol = 5) {
  let diffs = 0;
  for (let i = 0; i < base.length; i++) {
    if (Math.abs(base[i] - curr[i]) > tol) diffs++;
  }
  return { diffs, pct: (diffs / base.length) * 100 };
}
const baseline = [255, 0, 0, 255, 0, 0, 255, 0];
const perfect = [255, 0, 0, 255, 0, 0, 255, 0];
const shifted = [255, 0, 0, 200, 0, 0, 255, 0];
const resA = diffPixels(baseline, perfect);
const resB = diffPixels(baseline, shifted);
console.log(`Clean match diffs: ${resA.diffs}`);
console.log(`Clean match pct: ${resA.pct.toFixed(1)}%`);
console.log(`Regressed diffs: ${resB.diffs}`);
console.log(`Regressed pct: ${resB.pct.toFixed(1)}%`);
console.log(`Has visual regression: ${resB.diffs > 0}`);
