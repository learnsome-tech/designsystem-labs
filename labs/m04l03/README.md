# m04l03 · Modal Dialogs & Alert Dialogs: Accessible Overlay Patterns

Module 4: Complex Stateful Overlay Primitives · lesson 4.3 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m04l03)

**Goal:** You can design and build accessible modal and alert dialog primitives with correct ARIA roles, labeled titles, descriptions, and safe default focus targeting.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l03-02](m04l03-02/) | Modal Vs Alertdialog Contracts | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Destructive Alert Confirmation Dialog

1. Create an AlertDialog primitive with title and description slots.
2. Prevent backdrop click dismissal to require explicit choices.
3. Set initial focus to the Cancel button to avoid accidental deletion.
4. Verify that role alertdialog and ARIA labels render correctly.

> **Hint:** Set role to alertdialog and ignore backdrop pointer click handlers.

## Check yourself

- What is the crucial semantic and behavioral distinction between dialog and alertdialog?
- Why must alert dialogs prevent dismissal on outside backdrop clicks?
- How do aria-labelledby and aria-describedby cooperate to give dialogs accessible context?
- Why should initial focus in a delete confirmation dialog target the Cancel button rather than Delete?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
