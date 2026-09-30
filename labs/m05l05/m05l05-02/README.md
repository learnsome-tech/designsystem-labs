# m05l05-02 · Contrast And Motion Auditing

**Lesson:** [Visual Contrast Auditing: Color Blindness & Reduced Motion](https://learnsome.tech/learn/designsystem-course/m05l05) (lesson 5.5, module 5: Accessibility Engineering & Verification) · Pro  
**Check:** Graded

## Goal

You can audit visual contrast against WCAG and APCA standards, design resilient interfaces for color-blind users, and implement graceful reduced-motion adaptations.

## Files

- [`starter/contrast_and_motion_auditing.tsx`](starter/contrast_and_motion_auditing.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m05l05/m05l05-02/starter`
2. Read `contrast_and_motion_auditing.tsx`.
3. Run it: `tsx contrast_and_motion_auditing.tsx`.
4. Check it from the repository root: `./check m05l05-02`.

## Expected output

```text
White on black: 21.00:1
Blue on white: 5.18:1
Full motion: 250ms
Reduced motion: 0ms
Reduced transition: none
```

## How to check

`./check m05l05-02` copies `starter/` into a scratch directory and runs `tsx contrast_and_motion_auditing.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m05l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
