# m06l01 · Storybook & Component Driven Development Workflows

Module 6: Testing, Documentation & Distribution · lesson 6.1 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m06l01)

**Goal:** You can author declarative Component Story Format three stories, configure interactive controls, generate living documentation, and write interaction tests using play functions.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l01-02](m06l01-02/) | Storybook Csf3 Workflows | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Author a Multi-State Button Story with Play Assertions

1. Create CSF3 stories for Primary, Secondary, and Loading buttons.
2. Configure argTypes providing interactive color and disabled controls.
3. Write a play function that clicks the button and asserts on click state.
4. Verify that stories render properly inside Storybook test runners.

> **Hint:** Use the play function to trigger canvasElement.querySelector('button')?.click().

## Check yourself

- How does Component Driven Development differ from page-first web development?
- What advantages does Component Story Format 3 provide over legacy story functions?
- How does the play function enable integration and interaction testing inside Storybook?
- Why is developing in isolation effective at catching unintended CSS specificity leaks?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
