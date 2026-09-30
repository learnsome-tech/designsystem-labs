# m06l04-02 · Governance Semver Deprecation

**Lesson:** [System Governance: Changesets, Semantic Versioning & Deprecation](https://learnsome.tech/learn/designsystem-course/m06l04) (lesson 6.4, module 6: Testing, Documentation & Distribution) · Pro  
**Check:** Graded

## Goal

You can govern production design systems using Changesets, apply Semantic Versioning strictly, manage deprecation lifecycles, and automate codemod migrations.

## Files

- [`starter/governance_semver_deprecation.tsx`](starter/governance_semver_deprecation.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m06l04/m06l04-02/starter`
2. Read `governance_semver_deprecation.tsx`.
3. Run it: `tsx governance_semver_deprecation.tsx`.
4. Check it from the repository root: `./check m06l04-02`.

## Expected output

```text
Patch: 1.2.4
Minor: 1.3.0
Major: 2.0.0
First deprecation: true
Second skipped: true
```

## How to check

`./check m06l04-02` copies `starter/` into a scratch directory and runs `tsx governance_semver_deprecation.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m06l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
