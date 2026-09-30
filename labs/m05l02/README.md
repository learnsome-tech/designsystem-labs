# m05l02 · Keyboard Navigation Protocols: Roving Tabindex & Virtual Focus

Module 5: Accessibility Engineering & Verification · lesson 5.2 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m05l02)

**Goal:** You can implement professional keyboard navigation protocols for composite widgets using roving tabindex and virtual focus with aria-activedescendant.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l02-02](m05l02-02/) | Roving Vs Virtual Focus | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Accessible Radio Group with Arrow Key Navigation

1. Create a RadioGroup primitive managing roving tabindex across radios.
2. Handle ArrowDown and ArrowRight to select and focus the next radio.
3. Handle ArrowUp and ArrowLeft to select and focus the previous radio.
4. Assert that only the currently selected radio has tabindex zero.

> **Hint:** Listen to onKeyDown for ArrowUp/Down/Left/Right and call focus() on target.

## Check yourself

- Why should a toolbar or menu only represent a single tab stop in page navigation?
- How does roving tabindex ensure that pressing Tab leaves the composite widget?
- Why is aria-activedescendant essential for combobox and autocomplete search inputs?
- How do Home and End keyboard shortcuts improve accessibility in large list widgets?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
