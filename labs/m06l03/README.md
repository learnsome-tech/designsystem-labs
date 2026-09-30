# m06l03 · Component Packaging: Dual ESM/CJS Builds & Package Exports

Module 6: Testing, Documentation & Distribution · lesson 6.3 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m06l03)

**Goal:** You can configure robust package manifests with subpath exports, dual ESM and CommonJS bundles, TypeScript type declarations, and tree-shaking metadata.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l03-02](m06l03-02/) | Package Exports Resolution | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Configure a Multi-Entrypoint Design System Manifest

1. Set up a package.json exports map for root and individual primitives.
2. Configure conditional exports for types, import, and require.
3. Mark all JavaScript files as sideEffect-free while protecting CSS.
4. Verify that Node resolution loads ESM files while maintaining types.

> **Hint:** Put types first in export objects: { types: '...', import: '...', require: '...' }.

## Check yourself

- Why must the 'types' condition appear before 'import' and 'require' in package.json exports?
- How does the sideEffects field enable bundlers like Rollup and webpack to tree-shake unused code?
- What happens if a design system publishes interactive hooks without the 'use client' directive in Next.js?
- Why should internal source files not be accessible to consumers when package exports are defined?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
