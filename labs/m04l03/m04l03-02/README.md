# m04l03-02 · Modal Vs Alertdialog Contracts

**Lesson:** [Modal Dialogs & Alert Dialogs: Accessible Overlay Patterns](https://learnsome.tech/learn/designsystem-course/m04l03) (lesson 4.3, module 4: Complex Stateful Overlay Primitives) · Pro  
**Check:** Graded

## Goal

You can design and build accessible modal and alert dialog primitives with correct ARIA roles, labeled titles, descriptions, and safe default focus targeting.

## Files

- [`starter/modal_vs_alertdialog_contracts.tsx`](starter/modal_vs_alertdialog_contracts.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l03/m04l03-02/starter`
2. Read `modal_vs_alertdialog_contracts.tsx`.
3. Run it: `tsx modal_vs_alertdialog_contracts.tsx`.
4. Check it from the repository root: `./check m04l03-02`.

## Expected output

```text
Modal role: true
Alert role: true
Aria modal: true
Labelled by: true
Described by: true
```

## How to check

`./check m04l03-02` copies `starter/` into a scratch directory and runs `tsx modal_vs_alertdialog_contracts.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m04l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
