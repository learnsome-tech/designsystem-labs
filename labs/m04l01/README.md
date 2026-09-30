# m04l01 · Overlay Architecture: Portals, Stacking Contexts & Backdrops

Module 4: Complex Stateful Overlay Primitives · lesson 4.1 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m04l01)

**Goal:** You can architect resilient overlay systems using React Portals, navigate CSS stacking contexts, enforce background scroll locking, and apply the inert attribute.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l01-02](m04l01-02/) | Portal Overlay Architecture | Runs, not graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Layered Portal and Backdrop Manager

1. Create a Portal component targeting document.body dynamically.
2. Implement scroll locking that restores previous body overflow.
3. Apply the HTML inert attribute to the root element when open.
4. Verify that portaled content renders outside parent clipping paths.

> **Hint:** Restore previous overflow in the useEffect cleanup return function.

## Check yourself

- Why do CSS properties like transform and filter create new stacking contexts?
- How does createPortal preserve React synthetic event bubbling across DOM trees?
- What advantage does the HTML inert attribute provide over aria-hidden='true' alone?
- Why must cleanup functions in useEffect restore previous document.body overflow values?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
