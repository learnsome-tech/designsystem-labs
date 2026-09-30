# m03l03 · Compound Component Patterns: Context Sharing & Internal State

Module 3: Headless Primitives & Component API Design · lesson 3.3 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m03l03)

**Goal:** You can architect compound component primitives that share implicit internal state via React Context, coordinate ARIA relationships, and enforce boundary safety.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l03-02](m03l03-02/) | Compound Tabs Primitive | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Accessible Compound Accordion Primitive

1. Create Accordion context tracking expanded panel keys.
2. Implement AccordionItem, AccordionTrigger, and AccordionPanel.
3. Coordinate aria-expanded and aria-controls between trigger and panel.
4. Verify that activating one accordion item toggles its visibility.

> **Hint:** Use unique item value props to track open items in a set or array.

## Check yourself

- How do compound components eliminate intermediate prop drilling?
- Why should custom context hooks throw an error when context is null?
- How do compound subcomponents coordinate accessible IDs between triggers and panels?
- What happens when multiple compound component instances are rendered on the same page?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
