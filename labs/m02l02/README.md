# m02l02 · Tailwind CSS v4 Engine: CSS Variables & Theme Extensions

Module 2: Styling Engines, Theming & CSS Architecture · lesson 2.2 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m02l02)

**Goal:** You can configure Tailwind CSS version four theme extensions, bind design tokens to CSS variables using the at theme directive, and generate dynamic utility classes.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l02-02](m02l02-02/) | Tailwind V4 Theme Engine | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Configure Tailwind Theme Extensions and Variable Utilities

1. Define an at-theme block declaring brand and accent color tokens.
2. Implement a theme compiler generating utility classes for custom tokens.
3. Apply local CSS variable overrides within a card component container.
4. Verify that utility classes automatically reflect overridden token values.

> **Hint:** Map theme keys to --color-* variables and verify utility rules reference var().

## Check yourself

- How does the at theme directive in Tailwind v4 eliminate the need for tailwind.config.js?
- How do utility classes in Tailwind v4 interact with underlying CSS custom properties?
- What advantage does CSS color-mix provide over manual opacity hex alpha values?
- How can nested components override Tailwind theme tokens without modifying utility class names?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
