# m03l02 · Component API Ergonomics: Composition vs Boolean Config Props

Module 3: Headless Primitives & Component API Design · lesson 3.2 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m03l02)

**Goal:** You can replace fragile monolithic components riddled with boolean configuration props with flexible, composable component architectures that leverage slots and children composition.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l02-02](m03l02-02/) | Composable Card Slots | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Refactor a Monolithic Alert into a Composable Primitive

1. Identify boolean props in a monolithic alert component.
2. Break the alert into Alert, AlertTitle, AlertDescription, and Action.
3. Render the composable alert with optional badges and buttons.
4. Verify that omitting child elements does not leave empty DOM nodes.

> **Hint:** Render subcomponents conditionally based on children presence.

## Check yourself

- Why do boolean configuration props lead to prop explosion in design systems?
- How does component composition achieve inversion of control for consumers?
- When is a named slot prop preferred over standard children composition?
- How do composable subcomponents improve tree-shaking and bundle efficiency?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
