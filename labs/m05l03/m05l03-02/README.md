# m05l03-02 · Live Regions Announcements

**Lesson:** [Screen Reader Interactions: Live Regions & Announcement Cues](https://learnsome.tech/learn/designsystem-course/m05l03) (lesson 5.3, module 5: Accessibility Engineering & Verification) · Pro  
**Check:** Graded

## Goal

You can design and engineer accessible live regions that communicate dynamic background mutations, form validation, and toast notifications to screen readers without stealing user focus.

## Files

- [`starter/dom-shim.ts`](starter/dom-shim.ts)
- [`starter/live_regions_announcements.tsx`](starter/live_regions_announcements.tsx): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m05l03/m05l03-02/starter`
2. Read `live_regions_announcements.tsx`.
3. Run it: `tsx live_regions_announcements.tsx`.
4. Check it from the repository root: `./check m05l03-02`.

## Expected output

```text
Polite role: status
Polite live: polite
Polite atomic: true
Polite text: Saved to cloud
Alert role: alert
Alert live: assertive
Alert text: Connection lost
```

## How to check

`./check m05l03-02` copies `starter/` into a scratch directory and runs `tsx live_regions_announcements.tsx` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/designsystem-course/m05l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
