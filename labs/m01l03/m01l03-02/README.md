# m01l03-02 · Style Dictionary Pipeline

**Lesson:** [Token Transformation: Style Dictionary & Multi-Platform Outputs](https://learnsome.tech/learn/designsystem-course/m01l03) (lesson 1.3, module 1: Foundations & Design Token Architecture) · Free  
**Check:** Graded

## Goal

You can configure Style Dictionary transformation pipelines, build custom value transforms, and export design tokens into CSS custom properties, TypeScript, and native mobile formats.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/style_dictionary_pipeline.tsx`](starter/style_dictionary_pipeline.tsx): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l03/m01l03-02/starter`
2. Read `style_dictionary_pipeline.tsx`.
3. Run it: `tsx style_dictionary_pipeline.tsx`.
4. Check it from the repository root: `./check m01l03-02`.

## Expected output

```text
Original pixel value: 16px
Transformed rem value: 1rem
CSS contains rem: true
```

## How to check

`./check m01l03-02` copies `starter/` into a scratch directory and runs `tsx style_dictionary_pipeline.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m01l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
