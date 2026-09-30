# m01l02 · Design Tokens: W3C Specs, Global, Semantic & Component Tokens

Module 1: Foundations & Design Token Architecture · lesson 1.2 · Free · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m01l02)

**Goal:** You can author W3C-compliant design tokens, structure three-tier token hierarchies (Global, Semantic, Component), and resolve alias references programmatically.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l02-02](m01l02-02/) | Dtcg Token Resolver | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Multi-Tier Token Alias Resolver

1. Structure a W3C compliant JSON token file across three tiers.
2. Create global palette tokens, semantic decision aliases, and buttons.
3. Write a recursive resolver resolving aliases denoted by curly braces.
4. Assert that component tokens resolve to correct global raw values.

> **Hint:** Check regex match for curly braces and recurse with incremented depth.

## Check yourself

- What is the role of $value and $type in the W3C DTCG design token specification?
- Why should components consume semantic tokens rather than raw global tokens?
- How does a three-tier token hierarchy simplify implementing dark mode?
- How do alias references between tokens prevent duplication in design systems?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
