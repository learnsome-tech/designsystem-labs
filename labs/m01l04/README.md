# m01l04 · Modern Color Spaces: OKLCH, Gamut Mapping & APCA Contrast

Module 1: Foundations & Design Token Architecture · lesson 1.4 · Free · [Open the lesson](https://learnsome.tech/learn/designsystem-course/m01l04)

**Goal:** You can generate perceptually uniform design system color palettes using OKLCH, apply gamut mapping for wide-gamut displays, and calculate accessible contrast using APCA and WCAG.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l04-02](m01l04-02/) | Oklch Color Scale | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Accessible OKLCH Palette Generator

1. Define an OKLCH color generator accepting hue, chroma, and lightness.
2. Generate a nine step monochromatic palette across lightness steps.
3. Calculate APCA and WCAG contrast against light and dark backdrops.
4. Assert that accessible contrast thresholds are met for text pairs.

> **Hint:** Ensure the difference in lightness between text and surface exceeds 0.6.

## Check yourself

- Why does HSL fail to provide perceptual uniformity across different hues?
- What do Lightness, Chroma, and Hue represent in the OKLCH color model?
- How does the APCA contrast algorithm improve upon legacy WCAG 2.1 contrast ratios?
- What is gamut mapping and why is it essential for wide-gamut display support?

---

[Course README](../../README.md) · [Design Systems & Component Engineering on LearnSome.tech](https://learnsome.tech/courses/designsystem-course)
