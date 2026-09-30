# m04l04 · Floating Primitives: Popovers, Tooltips & Positioning

Module 4: Complex Stateful Overlay Primitives · lesson 4.4 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m04l04)

**Goal:** You can engineer resilient floating primitives including tooltips and popovers with collision-aware placement, arrow offsets, and strict ARIA accessibility contracts.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l04-02](m04l04-02/) | Floating Positioning Primitives | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Auto-Flipping Tooltip with Delay Management

1. Implement a headless Tooltip hook managing show and hide timers.
2. Calculate dynamic top versus bottom placement to avoid viewport edges.
3. Bind aria-describedby between the trigger element and tooltip panel.
4. Verify that pressing Escape dismisses the tooltip immediately.

> **Hint:** Use setTimeout for hover delay and clear timers on pointer leave.

## Check yourself

- What is the critical accessibility rule distinguishing a tooltip from a popover?
- Why must tooltips trigger on keyboard focus in addition to pointer hover?
- How does the flip middleware detect viewport collisions in floating coordinate engines?
- How does modern CSS anchor positioning eliminate JavaScript layout thrashing?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
