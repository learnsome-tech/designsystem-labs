# m05l04 · Automated Accessibility Testing: axe-core & Testing Library

Module 5: Accessibility Engineering & Verification · lesson 5.4 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m05l04)

**Goal:** You can integrate automated accessibility testing with axe-core into component test suites, catch WCAG regressions in CI, and configure rule sets.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l04-02](m05l04-02/) | Axe Core Automated Testing | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Integrate axe-core Verification into a Component Test Suite

1. Render a modal dialog component into a headless DOM container.
2. Run axe.run targeting dialog-related WCAG rules.
3. Verify that an inaccessible dialog triggers descriptive violations.
4. Assert that fixing labels and focus bounds brings violations to zero.

> **Hint:** Filter axe rules using { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } }.

## Check yourself

- Why can automated accessibility tools only catch around 30% to 50% of total WCAG defects?
- How does the button-name rule in axe-core verify accessible names?
- What is the difference between axe-core impact levels like critical, serious, and minor?
- How do custom Testing Library matchers like toHaveNoViolations streamline test assertions?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
