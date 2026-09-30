# m02l01 · CSS Custom Properties & Dynamic Theming Architecture

Module 2: Styling Engines, Theming & CSS Architecture · lesson 2.1 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m02l01)

**Goal:** You can design and implement dynamic multi-theme architectures using CSS custom properties, scoped variable overrides, and data-attribute switching.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l01-02](m02l01-02/) | Css Custom Props Theming | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Multi-Theme CSS Variable Manager

1. Create a CSS custom property dictionary for multi brand themes.
2. Implement a theme applicator utility mutating data attributes.
3. Override component specific tokens within nested DOM subtrees.
4. Assert that computed styles reflect updated CSS custom properties.

> **Hint:** Set data-theme attribute on the container and inspect getPropertyValue.

## Check yourself

- How do CSS custom properties differ from preprocessor variables in Sass or Less?
- Why does data-attribute theming outperform runtime JavaScript CSS-in-JS libraries?
- How does the fallback parameter in var(--custom-prop, fallback) improve component resilience?
- How does lexical scoping in CSS variables allow nested subtrees to have independent themes?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
