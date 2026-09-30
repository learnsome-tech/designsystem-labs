# m04l05-02 · Menu Roving Navigation

**Lesson:** [Navigation & Disclosure: Dropdown Menus, Tabs & Accordions](https://learnsome.tech/learn/designsystem-course/m04l05) (lesson 4.5, module 4: Complex Stateful Overlay Primitives) · Pro  
**Check:** Graded

## Goal

You can architect accessible navigation and disclosure primitives including dropdown menus, accordions, and tabs with roving tabindex keyboard navigation and typeahead.

## Files

- [`starter/menu_roving_navigation.tsx`](starter/menu_roving_navigation.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l05/m04l05-02/starter`
2. Read `menu_roving_navigation.tsx`.
3. Run it: `tsx menu_roving_navigation.tsx`.
4. Check it from the repository root: `./check m04l05-02`.

## Expected output

```text
Initial: edit
Next (skips disabled): share
Next again: delete
Wrap around: edit
```

## How to check

`./check m04l05-02` copies `starter/` into a scratch directory and runs `tsx menu_roving_navigation.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m04l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
