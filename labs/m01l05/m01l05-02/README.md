# m01l05-02 · Fluid Typography Scale

**Lesson:** [Typography & Spatial Grids: Modular Scales & Fluid Typography](https://learnsome.tech/learn/designsystem-course/m01l05) (lesson 1.5, module 1: Foundations & Design Token Architecture) · Free  
**Check:** Graded

## Goal

You can design mathematically harmonious typography systems using modular scales, compute fluid clamp formulas, and construct 8-point spatial grids for UI layouts.

## Files

- [`starter/fluid_typography_scale.tsx`](starter/fluid_typography_scale.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l05/m01l05-02/starter`
2. Read `fluid_typography_scale.tsx`.
3. Run it: `tsx fluid_typography_scale.tsx`.
4. Check it from the repository root: `./check m01l05-02`.

## Expected output

```text
Base body font size: 16px
Headline font size: 31.3px
Fluid CSS clamp rule: clamp(2rem, 1.25rem + 3.00vw, 3.5rem)
Bounds verified: true
```

## How to check

`./check m01l05-02` copies `starter/` into a scratch directory and runs `tsx fluid_typography_scale.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m01l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
