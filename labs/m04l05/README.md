# m04l05 · Navigation & Disclosure: Dropdown Menus, Tabs & Accordions

Module 4: Complex Stateful Overlay Primitives · lesson 4.5 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m04l05)

**Goal:** You can architect accessible navigation and disclosure primitives including dropdown menus, accordions, and tabs with roving tabindex keyboard navigation and typeahead.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l05-02](m04l05-02/) | Menu Roving Navigation | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Accessible Collapsible Disclosure Primitive

1. Create a Disclosure primitive with Trigger and Content subcomponents.
2. Bind aria-expanded and aria-controls between trigger and content.
3. Support keyboard Enter and Space activation on the trigger.
4. Verify that toggling trigger state hides and reveals content.

> **Hint:** Set aria-expanded to boolean state and toggle hidden attribute on content.

## Check yourself

- Why should standard site navigation links not use ARIA role='menu'?
- How does roving tabindex ensure that Tab moves to the next form field instead of cycling menu items?
- How does the keyboard navigation contract differ between Tabs and Menus?
- Why should disabled menu items remain discoverable in the DOM while being skipped by arrow navigation?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
