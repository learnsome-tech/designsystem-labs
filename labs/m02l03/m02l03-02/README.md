# m02l03-02 · Theme Contrast Resolver

**Lesson:** [Dark Mode Strategies: System Preference, Class & High-Contrast](https://learnsome.tech/learn/designsystem-course/m02l03) (lesson 2.3, module 2: Styling Engines, Theming & CSS Architecture) · Pro  
**Check:** Graded

## Goal

You can architect resilient dark mode and high-contrast theming strategies supporting system preferences, class-based user overrides, and forced-colors accessibility modes.

## Files

- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/theme_contrast_resolver.tsx`](starter/theme_contrast_resolver.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m02l03/m02l03-02/starter`
2. Read `theme_contrast_resolver.tsx`.
3. Run it: `tsx theme_contrast_resolver.tsx`.
4. Check it from the repository root: `./check m02l03-02`.

## Expected output

```text
Resolved: dark
Class: dark
High contrast: high-contrast
Theme attr: high-contrast
```

## How to check

`./check m02l03-02` copies `starter/` into a scratch directory and runs `tsx theme_contrast_resolver.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m02l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
