# m02l02-02 · Tailwind V4 Theme Engine

**Lesson:** [Tailwind CSS v4 Engine: CSS Variables & Theme Extensions](https://learnsome.tech/learn/designsystem-course/m02l02) (lesson 2.2, module 2: Styling Engines, Theming & CSS Architecture) · Pro  
**Check:** Graded

## Goal

You can configure Tailwind CSS version four theme extensions, bind design tokens to CSS variables using the at theme directive, and generate dynamic utility classes.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tailwind_v4_theme_engine.tsx`](starter/tailwind_v4_theme_engine.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m02l02/m02l02-02/starter`
2. Read `tailwind_v4_theme_engine.tsx`.
3. Run it: `tsx tailwind_v4_theme_engine.tsx`.
4. Check it from the repository root: `./check m02l02-02`.

## Expected output

```text
Variable: #2563eb
Accent: oklch(65% 0.22 140)
Utility bg: background-color: var(--color-brand);
Utility text: color: var(--color-accent);
```

## How to check

`./check m02l02-02` copies `starter/` into a scratch directory and runs `tsx tailwind_v4_theme_engine.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m02l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
