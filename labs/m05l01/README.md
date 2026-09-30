# m05l01 · WAI-ARIA Semantics: Roles, States & Accessible Name Computation

Module 5: Accessibility Engineering & Verification · lesson 5.1 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m05l01)

**Goal:** You can apply WAI-ARIA semantics correctly, follow the First Rule of ARIA, and evaluate the Accessible Name Computation hierarchy across design system components.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l01-02](m05l01-02/) | Accname Precedence Hierarchy | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Audit and Compute Component Accessible Names

1. Create an icon button with SVG and compute its accessible name.
2. Wire up an input element to an external label using aria-labelledby.
3. Assert that screen readers resolve the intended descriptive string.
4. Verify that hiding elements with aria-hidden removes them from trees.

> **Hint:** Check that icon SVGs have aria-hidden='true' when parent buttons have aria-label.

## Check yourself

- What is the First Rule of ARIA and why is it foundational to web accessibility?
- Why does aria-labelledby take precedence over aria-label in AccName computation?
- Does adding role='button' to a <div> make it respond to Enter and Space keypresses?
- How do aria-hidden='true' and the HTML inert attribute affect accessible name computation?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
