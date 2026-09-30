# m06l02-02 · Visual Regression Differencing

**Lesson:** [Visual Regression Testing: Playwright & Snapshot Differencing](https://learnsome.tech/learn/designsystem-course/m06l02) (lesson 6.2, module 6: Testing, Documentation & Distribution) · Pro  
**Check:** Graded

## Goal

You can design and run visual regression testing suites using Playwright, eliminate snapshot flakiness, and configure pixel differencing thresholds in CI.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`starter/visual_regression_differencing.tsx`](starter/visual_regression_differencing.tsx): the listing from the lesson
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m06l02/m06l02-02/starter`
2. Read `visual_regression_differencing.tsx`.
3. Run it: `tsx visual_regression_differencing.tsx`.
4. Check it from the repository root: `./check m06l02-02`.

## Expected output

```text
Clean match diffs: 0
Clean match pct: 0.0%
Regressed diffs: 1
Regressed pct: 12.5%
Has visual regression: true
```

## How to check

`./check m06l02-02` copies `starter/` into a scratch directory and runs `tsx visual_regression_differencing.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m06l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
