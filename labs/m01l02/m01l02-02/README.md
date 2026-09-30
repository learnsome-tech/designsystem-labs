# m01l02-02 · Dtcg Token Resolver

**Lesson:** [Design Tokens: W3C Specs, Global, Semantic & Component Tokens](https://learnsome.tech/learn/designsystem-course/m01l02) (lesson 1.2, module 1: Foundations & Design Token Architecture) · Free  
**Check:** Graded

## Goal

You can author W3C-compliant design tokens, structure three-tier token hierarchies (Global, Semantic, Component), and resolve alias references programmatically.

## Files

- [`starter/dtcg_token_resolver.tsx`](starter/dtcg_token_resolver.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l02/m01l02-02/starter`
2. Read `dtcg_token_resolver.tsx`.
3. Run it: `tsx dtcg_token_resolver.tsx`.
4. Check it from the repository root: `./check m01l02-02`.

## Expected output

```text
Global raw token: #3b82f6
Semantic alias resolved: #3b82f6
Component token resolved: #3b82f6
Tier chain matches: true
```

## How to check

`./check m01l02-02` copies `starter/` into a scratch directory and runs `tsx dtcg_token_resolver.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m01l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
