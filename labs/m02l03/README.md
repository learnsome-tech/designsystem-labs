# m02l03 · Dark Mode Strategies: System Preference, Class & High-Contrast

Module 2: Styling Engines, Theming & CSS Architecture · lesson 2.3 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m02l03)

**Goal:** You can architect resilient dark mode and high-contrast theming strategies supporting system preferences, class-based user overrides, and forced-colors accessibility modes.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l03-02](m02l03-02/) | Theme Contrast Resolver | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement a Tri-State Theme and Contrast Resolver

1. Listen to prefers-color-scheme and prefers-contrast media queries.
2. Implement a theme resolver prioritizing high-contrast modes.
3. Synchronize theme state across localStorage and document root.
4. Assert that DOM attributes correctly match active color schemes.

> **Hint:** Check prefers-contrast first before resolving system or manual preference.

## Check yourself

- Why should user preference override system prefers-color-scheme by default?
- How does Windows Forced Colors mode affect CSS custom property color values?
- Why are explicit borders required in high-contrast dark themes?
- How does the forced-color-adjust property interact with system color tokens?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
