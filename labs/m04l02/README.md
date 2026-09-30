# m04l02 · Focus Management: Trapping, Restoration & Focus Rings

Module 4: Complex Stateful Overlay Primitives · lesson 4.2 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m04l02)

**Goal:** You can implement accessible focus trapping, keyboard loop-around, initial focus targeting, and focus restoration to protect keyboard navigation within overlays.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l02-02](m04l02-02/) | Focus Trap Restoration | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Headless Focus Trap and Escape Handler Hook

1. Create useFocusTrap querying all interactive DOM elements.
2. Trap Tab and Shift+Tab key presses within container edges.
3. Listen for Escape key to trigger the onClose callback.
4. Verify that unmounting restores focus to the previously active element.

> **Hint:** Query interactive selectors like button, input, select, and tabindex zero.

## Check yourself

- Why is focus trapping a strict requirement under WCAG 2.2 Criterion 2.1.2?
- How does Shift+Tab behave when focus is on the first focusable element inside a trap?
- What happens if a modal unmounts without restoring focus to the trigger button?
- Why is :focus-visible preferred over :focus for styling component focus rings?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
