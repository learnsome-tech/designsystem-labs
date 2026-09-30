# m05l05 · Visual Contrast Auditing: Color Blindness & Reduced Motion

Module 5: Accessibility Engineering & Verification · lesson 5.5 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m05l05)

**Goal:** You can audit visual contrast against WCAG and APCA standards, design resilient interfaces for color-blind users, and implement graceful reduced-motion adaptations.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l05-02](m05l05-02/) | Contrast And Motion Auditing | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Audit Contrast and Build a Reduced Motion Safe Transition

1. Compute WCAG contrast ratios across all semantic brand tokens.
2. Simulate deuteranopic perception on success and danger alerts.
3. Add supporting icons ensuring state is clear without color vision.
4. Implement a CSS transition token collapsing to zero on reduced motion.

> **Hint:** Check prefers-reduced-motion media query and substitute subtle opacity fades.

## Check yourself

- What is the minimum WCAG AA contrast ratio for standard body text versus large text?
- How does the Advanced Perceptual Contrast Algorithm improve upon legacy WCAG 2 contrast calculations?
- Why must status indicators like badges and alerts never rely solely on color?
- How does the prefers-reduced-motion media query protect users with vestibular motion disorders?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
