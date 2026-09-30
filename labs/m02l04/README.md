# m02l04 · Class Variance Authority: Type-Safe Variant & Prop Orchestration

Module 2: Styling Engines, Theming & CSS Architecture · lesson 2.4 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m02l04)

**Goal:** You can orchestrate multi-dimensional component variants using Class Variance Authority, extract TypeScript prop contracts, and safely resolve utility class conflicts using the cn pattern.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l04-02](m02l04-02/) | Cva Button Orchestration | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Design a Compound Badge Variant with CVA and cn

1. Define a badge variant schema supporting tone and size dimensions.
2. Add a compound variant for elevated warning badges.
3. Implement the cn utility combining variants with caller class names.
4. Verify that consumer classes override default padding cleanly.

> **Hint:** Use compoundVariants array to apply special styling when tone and size match.

## Check yourself

- Why does HTML class attribute order not determine CSS rule precedence?
- How does tailwind-merge resolve conflicts between p-4 and px-6?
- What role does compoundVariants play in Class Variance Authority?
- How does TypeScript extract component prop types from a CVA declaration?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
