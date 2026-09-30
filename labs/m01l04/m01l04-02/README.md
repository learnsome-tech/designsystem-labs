# m01l04-02 · Oklch Color Scale

**Lesson:** [Modern Color Spaces: OKLCH, Gamut Mapping & APCA Contrast](https://learnsome.tech/learn/designsystem-course/m01l04) (lesson 1.4, module 1: Foundations & Design Token Architecture) · Free  
**Check:** Graded

## Goal

You can generate perceptually uniform design system color palettes using OKLCH, apply gamut mapping for wide-gamut displays, and calculate accessible contrast using APCA and WCAG.

## Files

- [`starter/oklch_color_scale.tsx`](starter/oklch_color_scale.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l04/m01l04-02/starter`
2. Read `oklch_color_scale.tsx`.
3. Run it: `tsx oklch_color_scale.tsx`.
4. Check it from the repository root: `./check m01l04-02`.

## Expected output

```text
Light token: oklch(90% 0.05 240)
Midtone token: oklch(50% 0.15 240)
Dark token: oklch(10% 0.05 240)
Uniform curve: true
```

## How to check

`./check m01l04-02` copies `starter/` into a scratch directory and runs `tsx oklch_color_scale.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m01l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
