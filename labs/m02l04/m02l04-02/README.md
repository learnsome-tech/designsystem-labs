# m02l04-02 · Cva Button Orchestration

**Lesson:** [Class Variance Authority: Type-Safe Variant & Prop Orchestration](https://learnsome.tech/learn/designsystem-course/m02l04) (lesson 2.4, module 2: Styling Engines, Theming & CSS Architecture) · Pro  
**Check:** Graded

## Goal

You can orchestrate multi-dimensional component variants using Class Variance Authority, extract TypeScript prop contracts, and safely resolve utility class conflicts using the cn pattern.

## Files

- [`starter/cva_button_orchestration.tsx`](starter/cva_button_orchestration.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m02l04/m02l04-02/starter`
2. Read `cva_button_orchestration.tsx`.
3. Run it: `tsx cva_button_orchestration.tsx`.
4. Check it from the repository root: `./check m02l04-02`.

## Expected output

```text
Default: rounded font-medium transition bg-blue-600 text-white h-8 px-3 text-xs
Danger: rounded font-medium transition bg-red-600 text-white h-12 px-6 text-base
Override px-8: true
Removed px-3: true
```

## How to check

`./check m02l04-02` copies `starter/` into a scratch directory and runs `tsx cva_button_orchestration.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m02l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
