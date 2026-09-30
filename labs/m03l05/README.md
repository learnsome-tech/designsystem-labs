# m03l05 · Actionable Form Primitives: Buttons, Switches & Inputs

Module 3: Headless Primitives & Component API Design · lesson 3.5 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m03l05)

**Goal:** You can engineer accessible form primitives including buttons, switches, and text inputs with bulletproof ARIA attributes, error linking, and keyboard interactions.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l05-02](m03l05-02/) | Actionable Form Primitives | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Accessible Form Field Composite Primitive

1. Create a Field primitive orchestrating Label, Input, and ErrorMessage.
2. Generate matching unique IDs using React useId.
3. Attach aria-invalid and aria-describedby conditionally when errors exist.
4. Verify that error messages announce to assistive tech with role alert.

> **Hint:** Use useId hook to create linked IDs for label and error containers.

## Check yourself

- Why should design system buttons default to type='button' instead of type='submit'?
- How does aria-describedby establish accessible relationships between inputs and error messages?
- What is the key accessibility difference between disabled and aria-disabled='true'?
- Why is role='switch' preferred over standard checkbox inputs for instant preference changes?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
