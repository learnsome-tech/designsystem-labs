# m05l04-02 · Axe Core Automated Testing

**Lesson:** [Automated Accessibility Testing: axe-core & Testing Library](https://learnsome.tech/learn/designsystem-course/m05l04) (lesson 5.4, module 5: Accessibility Engineering & Verification) · Pro  
**Check:** Read along

## Goal

You can integrate automated accessibility testing with axe-core into component test suites, catch WCAG regressions in CI, and configure rule sets.

## Files

- [`starter/axe_core_automated_testing.tsx`](starter/axe_core_automated_testing.tsx): the listing from the lesson
- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Read `starter/axe_core_automated_testing.tsx` alongside the lesson.
2. On a machine that has what it needs, the lesson ran it with:

   ```sh
   bun run axe_core_automated_testing.tsx
   ```

## How to check

**Read along.** The listing does not run cleanly in the lab sandbox (it relies on something the sandbox cannot provide), so the site shows it read-only.

There is nothing to check: `./check m05l04-02` says so and moves on.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m05l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
