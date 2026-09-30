# m03l04 · Polymorphism & Slotted Composition: The asChild Pattern

Module 3: Headless Primitives & Component API Design · lesson 3.4 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m03l04)

**Goal:** You can implement polymorphic UI components using the asChild and Slot composition patterns, safely merging props, event handlers, and refs without DOM wrapper overhead.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l04-02](m03l04-02/) | Aschild Slot Pattern | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an asChild Compatible NavLink Primitive

1. Create a polymorphic NavLink primitive supporting asChild.
2. Implement props merging for active styles and aria-current.
3. Render NavLink wrapping a framework routing anchor element.
4. Verify that DOM output contains a single anchor without extra divs.

> **Hint:** Use React.cloneElement to merge className and aria-current onto children.

## Check yourself

- Why does the asChild pattern provide better TypeScript ergonomics than the as prop?
- How does the Slot primitive merge className props between parent and child?
- Why must event handlers be composed rather than replaced when cloning children?
- How does eliminating intermediate wrapper divs protect CSS flexbox and grid layouts?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
