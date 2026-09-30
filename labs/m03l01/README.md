# m03l01 · Headless Architecture: State vs Presentation Separation

Module 3: Headless Primitives & Component API Design · lesson 3.1 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m03l01)

**Goal:** You can architect headless UI primitives that isolate state machines, keyboard navigation, and ARIA accessibility contracts from presentation styling.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l01-02](m03l01-02/) | Headless Disclosure Primitive | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Headless Toggle Switch State Machine

1. Create a headless switch hook managing checked and disabled states.
2. Implement getButtonProps attaching role switch and aria-checked.
3. Support keyboard toggle handling for Space and Enter keys.
4. Verify that firing click toggles aria-checked state correctly.

> **Hint:** Return role 'switch' and map checked boolean to aria-checked.

## Check yourself

- What is the primary benefit of headless UI components over pre-styled libraries?
- How do prop getters differ from compound component context providers?
- Why must headless triggers declare aria-expanded and aria-controls attributes?
- How does a controllable state hook gracefully handle both controlled and uncontrolled props?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
