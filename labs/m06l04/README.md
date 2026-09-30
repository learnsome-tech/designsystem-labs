# m06l04 · System Governance: Changesets, Semantic Versioning & Deprecation

Module 6: Testing, Documentation & Distribution · lesson 6.4 · Pro · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m06l04)

**Goal:** You can govern production design systems using Changesets, apply Semantic Versioning strictly, manage deprecation lifecycles, and automate codemod migrations.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l04-02](m06l04-02/) | Governance Semver Deprecation | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Design a Versioned Component Deprecation and Migration Path

1. Annotate a legacy icon prop with JSDoc @deprecated.
2. Implement a warnDeprecatedOnce utility logging development warnings.
3. Write a changeset markdown entry specifying a major version bump.
4. Verify that calling the deprecated prop warns once and continues.

> **Hint:** Check process.env.NODE_ENV !== 'production' before issuing warnings.

## Check yourself

- What is the concrete difference between a MINOR bump and a MAJOR bump in a design system?
- Why should runtime deprecation warnings only log once and only in development mode?
- How does Changesets prevent merge conflicts during multi-team release workflows?
- Why are automated jscodeshift codemods essential when executing major breaking upgrades?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
