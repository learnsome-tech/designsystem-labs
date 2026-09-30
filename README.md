<p>
  <a href="https://learnsome.tech/courses/designsystem-course">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".github/assets/wordmark-inverse.svg">
      <img src=".github/assets/wordmark.svg" alt="LearnSome.tech" width="260">
    </picture>
  </a>
</p>

# Design Systems & Component Engineering

**Design Tokens, Theming, Headless Primitives, Accessibility & Distribution**

6 modules, 28 lessons: Foundations & Design Token Architecture; Styling Engines, Theming & CSS Architecture; Headless Primitives & Component API Design; Complex Stateful Overlay Primitives; Accessibility Engineering & Verification; Testing, Documentation & Distribution. Advanced level, about 1 hour.

This repository holds the labs of the LearnSome.tech course [Design Systems & Component Engineering](https://learnsome.tech/courses/designsystem-course): each lab's starter files, a README with the goal, the steps and the expected output, and `./check`, which tests your work the way the site does.

## Start

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/learnsome-tech/designsystem-labs?quickstart=1)

- **Codespaces:** the badge opens this repository in a dev container with Node.js 24.21.0, as in the site's lab sandbox.
- **On your machine:**

  ```sh
  git clone https://github.com/learnsome-tech/designsystem-labs.git
  cd designsystem-labs
  npm ci
  ./check m01l01-02
  ```

  You need Node.js for `./check`, and for the labs themselves Node.js 24.21.0. Other versions mostly work, but only the sandbox's versions are sure to print what the site prints. VS Code's Dev Containers extension builds the same container as Codespaces (x86-64).

## Doing a lab

1. Open the lesson on LearnSome.tech and the lab folder beside it: `labs/<lesson>/<lab>/`. The lab README has the goal, the steps and the expected output.
2. Work in the lab's `starter/` folder.
3. From the repository root, run `./check <lab>` (for example `./check m01l01-02`), or `./check <lesson>` for all labs of a lesson, or `./check --all`. `./check --list` shows every lab and how it is checked.

`./check` runs your starter the way the site's lab sandbox does: in a scratch copy that is its working directory and `HOME`, with `LANG=C.UTF-8`, `TZ=UTC`, `input.txt` on standard input, 10 seconds and 256 KiB of output per stream. It then compares the output with the site's own rules, so a pass here is a pass on the site.

| Check | What `./check` does | Labs |
| --- | --- | --- |
| Graded | Runs the program and compares its output with `expected.txt`. | 26 |
| Runs, not graded | Runs the program and shows its output; the site gives no pass or fail, and the lab README says why. | 1 |
| Read along | Nothing to run here: the site shows the listing read-only, and the lab README says honestly what it needs (Docker, a cluster, a cloud account...). | 1 |

## What is published, and what is not

Every lab's starter is the code the lesson shows on screen, which is also what the lab editor on the site opens with. Where that code is the whole program, such as a recorded shell session or a script from the video, it is published as it is: it is the lesson content. Nothing beyond the lesson is published. There are no reference solutions and no answers to the lesson exercises, and nothing the site keeps private.

Pro lessons' labs are here as starters too. LearnSome.tech runs and grades your labs in its sandbox, hosts the videos and keeps your progress; running and grading a Pro lab on the site needs Pro.

## Modules and lessons

### Module 1: Foundations & Design Token Architecture

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 1.1 | [Design Systems Architecture: Foundations, Layers & Taxonomy](https://learnsome.tech/learn/designsystem-course/m01l01) | [1 lab](labs/m01l01/) | Free |
| 1.2 | [Design Tokens: W3C Specs, Global, Semantic & Component Tokens](https://learnsome.tech/learn/designsystem-course/m01l02) | [1 lab](labs/m01l02/) | Free |
| 1.3 | [Token Transformation: Style Dictionary & Multi-Platform Outputs](https://learnsome.tech/learn/designsystem-course/m01l03) | [1 lab](labs/m01l03/) | Free |
| 1.4 | [Modern Color Spaces: OKLCH, Gamut Mapping & APCA Contrast](https://learnsome.tech/learn/designsystem-course/m01l04) | [1 lab](labs/m01l04/) | Free |
| 1.5 | [Typography & Spatial Grids: Modular Scales & Fluid Typography](https://learnsome.tech/learn/designsystem-course/m01l05) | [1 lab](labs/m01l05/) | Free |

### Module 2: Styling Engines, Theming & CSS Architecture

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 2.1 | [CSS Custom Properties & Dynamic Theming Architecture](https://learnsome.tech/learn/designsystem-course/m02l01) | [1 lab](labs/m02l01/) | Pro |
| 2.2 | [Tailwind CSS v4 Engine: CSS Variables & Theme Extensions](https://learnsome.tech/learn/designsystem-course/m02l02) | [1 lab](labs/m02l02/) | Pro |
| 2.3 | [Dark Mode Strategies: System Preference, Class & High-Contrast](https://learnsome.tech/learn/designsystem-course/m02l03) | [1 lab](labs/m02l03/) | Pro |
| 2.4 | [Class Variance Authority: Type-Safe Variant & Prop Orchestration](https://learnsome.tech/learn/designsystem-course/m02l04) | [1 lab](labs/m02l04/) | Pro |

### Module 3: Headless Primitives & Component API Design

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 3.1 | [Headless Architecture: State vs Presentation Separation](https://learnsome.tech/learn/designsystem-course/m03l01) | [1 lab](labs/m03l01/) | Pro |
| 3.2 | [Component API Ergonomics: Composition vs Boolean Config Props](https://learnsome.tech/learn/designsystem-course/m03l02) | [1 lab](labs/m03l02/) | Pro |
| 3.3 | [Compound Component Patterns: Context Sharing & Internal State](https://learnsome.tech/learn/designsystem-course/m03l03) | [1 lab](labs/m03l03/) | Pro |
| 3.4 | [Polymorphism & Slotted Composition: The asChild Pattern](https://learnsome.tech/learn/designsystem-course/m03l04) | [1 lab](labs/m03l04/) | Pro |
| 3.5 | [Actionable Form Primitives: Buttons, Switches & Inputs](https://learnsome.tech/learn/designsystem-course/m03l05) | [1 lab](labs/m03l05/) | Pro |

### Module 4: Complex Stateful Overlay Primitives

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 4.1 | [Overlay Architecture: Portals, Stacking Contexts & Backdrops](https://learnsome.tech/learn/designsystem-course/m04l01) | [1 lab](labs/m04l01/) | Pro |
| 4.2 | [Focus Management: Trapping, Restoration & Focus Rings](https://learnsome.tech/learn/designsystem-course/m04l02) | [1 lab](labs/m04l02/) | Pro |
| 4.3 | [Modal Dialogs & Alert Dialogs: Accessible Overlay Patterns](https://learnsome.tech/learn/designsystem-course/m04l03) | [1 lab](labs/m04l03/) | Pro |
| 4.4 | [Floating Primitives: Popovers, Tooltips & Positioning](https://learnsome.tech/learn/designsystem-course/m04l04) | [1 lab](labs/m04l04/) | Pro |
| 4.5 | [Navigation & Disclosure: Dropdown Menus, Tabs & Accordions](https://learnsome.tech/learn/designsystem-course/m04l05) | [1 lab](labs/m04l05/) | Pro |

### Module 5: Accessibility Engineering & Verification

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 5.1 | [WAI-ARIA Semantics: Roles, States & Accessible Name Computation](https://learnsome.tech/learn/designsystem-course/m05l01) | [1 lab](labs/m05l01/) | Pro |
| 5.2 | [Keyboard Navigation Protocols: Roving Tabindex & Virtual Focus](https://learnsome.tech/learn/designsystem-course/m05l02) | [1 lab](labs/m05l02/) | Pro |
| 5.3 | [Screen Reader Interactions: Live Regions & Announcement Cues](https://learnsome.tech/learn/designsystem-course/m05l03) | [1 lab](labs/m05l03/) | Pro |
| 5.4 | [Automated Accessibility Testing: axe-core & Testing Library](https://learnsome.tech/learn/designsystem-course/m05l04) | [1 lab](labs/m05l04/) | Pro |
| 5.5 | [Visual Contrast Auditing: Color Blindness & Reduced Motion](https://learnsome.tech/learn/designsystem-course/m05l05) | [1 lab](labs/m05l05/) | Pro |

### Module 6: Testing, Documentation & Distribution

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 6.1 | [Storybook & Component Driven Development Workflows](https://learnsome.tech/learn/designsystem-course/m06l01) | [1 lab](labs/m06l01/) | Pro |
| 6.2 | [Visual Regression Testing: Playwright & Snapshot Differencing](https://learnsome.tech/learn/designsystem-course/m06l02) | [1 lab](labs/m06l02/) | Pro |
| 6.3 | [Component Packaging: Dual ESM/CJS Builds & Package Exports](https://learnsome.tech/learn/designsystem-course/m06l03) | [1 lab](labs/m06l03/) | Pro |
| 6.4 | [System Governance: Changesets, Semantic Versioning & Deprecation](https://learnsome.tech/learn/designsystem-course/m06l04) | [1 lab](labs/m06l04/) | Pro |

**Free** lessons are open to anyone with a free LearnSome.tech account; **Pro** lessons need a Pro membership to watch, run and grade on the site.

## Licence

- **Code** (starter files, `check` and `.learnsome/`, the dev container and the workflows) is under the [MIT licence](LICENSE).
- **Written text** (the READMEs, lab instructions, lesson text, exercises and questions) is under [CC BY-NC-SA 4.0](LICENSE-text.md): share and adapt it with attribution to LearnSome.tech, not commercially, under the same licence.
- The LearnSome.tech name and logo are not covered by either licence.

## Contributing and security

This repository is generated from the course. Report a broken lab or a content error [as an issue](../../issues/new/choose); see [CONTRIBUTING.md](CONTRIBUTING.md). Security reports go to [SECURITY.md](SECURITY.md).

© 2026 LearnSome.tech
