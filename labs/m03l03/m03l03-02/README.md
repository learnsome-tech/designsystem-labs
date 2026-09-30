# m03l03-02 · Compound Tabs Primitive

**Lesson:** [Compound Component Patterns: Context Sharing & Internal State](https://learnsome.tech/learn/designsystem-course/m03l03) (lesson 3.3, module 3: Headless Primitives & Component API Design) · Pro  
**Check:** Graded

## Goal

You can architect compound component primitives that share implicit internal state via React Context, coordinate ARIA relationships, and enforce boundary safety.

## Files

- [`starter/compound_tabs_primitive.tsx`](starter/compound_tabs_primitive.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m03l03/m03l03-02/starter`
2. Read `compound_tabs_primitive.tsx`.
3. Run it: `tsx compound_tabs_primitive.tsx`.
4. Check it from the repository root: `./check m03l03-02`.

## Expected output

```text
Tab role: true
Selected: true
Panel role: true
Panel text: true
```

## How to check

`./check m03l03-02` copies `starter/` into a scratch directory and runs `tsx compound_tabs_primitive.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m03l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
