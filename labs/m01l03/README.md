# m01l03 · Token Transformation: Style Dictionary & Multi-Platform Outputs

Module 1: Foundations & Design Token Architecture · lesson 1.3 · Free · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m01l03)

**Goal:** You can configure Style Dictionary transformation pipelines, build custom value transforms, and export design tokens into CSS custom properties, TypeScript, and native mobile formats.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l03-02](m01l03-02/) | Style Dictionary Pipeline | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Multi-Platform Style Dictionary Pipeline

1. Configure a Style Dictionary pipeline with custom transforms.
2. Transform pixel dimension tokens to responsive rem measurements.
3. Format output into both CSS custom properties and TypeScript types.
4. Validate that downstream compilers receive type safe token values.

> **Hint:** Divide pixel values by 16 and append the rem string suffix.

## Check yourself

- What is the difference between a Transform and a Formatter in Style Dictionary?
- Why are pixel spacing tokens converted to rem units for modern web targets?
- How does generating TypeScript definitions alongside CSS variables benefit developers?
- How can CI pipelines automate design token delivery when designers update Figma?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
