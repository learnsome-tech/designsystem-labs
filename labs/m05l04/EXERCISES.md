# Exercises — Automated Accessibility Testing: axe-core & Testing Library

Lesson `m05l04` · [Watch](https://learnsome.tech/courses/designsystem-course/watch?lesson=m05l04)

## Exercise 1: Integrate axe-core Verification into a Component Test Suite

1. Render a modal dialog component into a headless DOM container.
2. Run axe.run targeting dialog-related WCAG rules.
3. Verify that an inaccessible dialog triggers descriptive violations.
4. Assert that fixing labels and focus bounds brings violations to zero.

> **Hint**: Filter axe rules using { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } }.


---

© LearnSome.tech · support@iwantto.learnsome.tech
