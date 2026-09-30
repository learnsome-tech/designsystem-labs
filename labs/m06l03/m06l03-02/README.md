# m06l03-02 · Package Exports Resolution

**Lesson:** [Component Packaging: Dual ESM/CJS Builds & Package Exports](https://learnsome.tech/learn/designsystem-course/m06l03) (lesson 6.3, module 6: Testing, Documentation & Distribution) · Pro  
**Check:** Graded

## Goal

You can configure robust package manifests with subpath exports, dual ESM and CommonJS bundles, TypeScript type declarations, and tree-shaking metadata.

## Files

- [`starter/package_exports_resolution.tsx`](starter/package_exports_resolution.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m06l03/m06l03-02/starter`
2. Read `package_exports_resolution.tsx`.
3. Run it: `tsx package_exports_resolution.tsx`.
4. Check it from the repository root: `./check m06l03-02`.

## Expected output

```text
Package: @ds/core
ESM target: ./dist/index.mjs
CJS target: ./dist/index.cjs
Types target: ./dist/index.d.ts
Side effect css: true
```

## How to check

`./check m06l03-02` copies `starter/` into a scratch directory and runs `tsx package_exports_resolution.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m06l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
