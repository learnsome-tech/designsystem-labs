# m06l01-02 · Storybook Csf3 Workflows

**Lesson:** [Storybook & Component Driven Development Workflows](https://learnsome.tech/learn/designsystem-course/m06l01) (lesson 6.1, module 6: Testing, Documentation & Distribution) · Pro  
**Check:** Graded

## Goal

You can author declarative Component Story Format three stories, configure interactive controls, generate living documentation, and write interaction tests using play functions.

## Files

- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/storybook_csf3_workflows.tsx`](starter/storybook_csf3_workflows.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m06l01/m06l01-02/starter`
2. Read `storybook_csf3_workflows.tsx`.
3. Run it: `tsx storybook_csf3_workflows.tsx`.
4. Check it from the repository root: `./check m06l01-02`.

## Expected output

```text
Rendered tag: button
Button label: Checkout
Button disabled: false
Play executed: true
```

## How to check

`./check m06l01-02` copies `starter/` into a scratch directory and runs `tsx storybook_csf3_workflows.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m06l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
