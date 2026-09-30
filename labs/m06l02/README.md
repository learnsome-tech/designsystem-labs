# m06l02 · Visual Regression Testing: Playwright & Snapshot Differencing

Module 6: Testing, Documentation & Distribution · lesson 6.2 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m06l02)

**Goal:** You can design and run visual regression testing suites using Playwright, eliminate snapshot flakiness, and configure pixel differencing thresholds in CI.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l02-02](m06l02-02/) | Visual Regression Differencing | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Configure a Playwright Visual Regression Test Suite

1. Set up a Playwright test capturing component story screenshots.
2. Configure toHaveScreenshot with maxDiffPixelRatio thresholds.
3. Freeze animations and await web fonts before snapping images.
4. Verify that modifying component padding fails the visual test.

> **Hint:** Set animations: 'disabled' in test options to freeze transitions.

## Check yourself

- Why can unit tests asserting on DOM classes fail to catch visual regressions?
- Why must web fonts and CSS animations be stabilized before capturing screenshots?
- How does maxDiffPixelRatio prevent false positives caused by minor subpixel rendering differences?
- Why should visual regression tests run inside consistent Docker containers in CI?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
