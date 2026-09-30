# m04l01-02 · Portal Overlay Architecture

**Lesson:** [Overlay Architecture: Portals, Stacking Contexts & Backdrops](https://learnsome.tech/learn/designsystem-course/m04l01) (lesson 4.1, module 4: Complex Stateful Overlay Primitives) · Pro  
**Check:** Runs, not graded

## Goal

You can architect resilient overlay systems using React Portals, navigate CSS stacking contexts, enforce background scroll locking, and apply the inert attribute.

## Files

- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/portal_overlay_architecture.tsx`](starter/portal_overlay_architecture.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l01/m04l01-02/starter`
2. Read `portal_overlay_architecture.tsx`.
3. Run it: `tsx portal_overlay_architecture.tsx`.
4. Check it from the repository root: `./check m04l01-02`.

## What the lesson recorded

Shown for reference; the check does not compare it.

```text
Body scroll: hidden
Root inert: true
Portal mounted: true
Modal text: Modal Content
```

## How to check

`./check m04l01-02` copies `starter/` into a scratch directory and runs `tsx portal_overlay_architecture.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It runs without a pass or fail: what the listing prints in the lab sandbox differs from the output recorded for the lesson (it depends on the machine, the clock or the network), so the site runs it without a pass or fail. `./check` shows the output and the exit code.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m04l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
