---
name: Yessine Portfolio
description: Reference-led Astro portfolio copied from siddz.com with Yessine's existing content.
colors:
  bg: "#fff"
  text: "#111"
  secondary: "#555"
  muted: "#737373"
  line: "rgba(0, 0, 0, 0.06)"
  surface: "rgba(0, 0, 0, 0.005)"
  input: "#fff"
  input-line: "rgba(0, 0, 0, 0.1)"
  hover: "rgba(0, 0, 0, 0.025)"
  grid: "rgba(0, 0, 0, 0.025)"
  cell: "#e4e4e7"
  level1: "#d4d4d8"
  level2: "#a1a1aa"
  level3: "#71717a"
  level4: "#52525b"
  dark-bg: "#070709"
  dark-text: "#f0f0f0"
  dark-secondary: "#b2b2b2"
  dark-muted: "#a0a0a0"
  dark-line: "rgba(255, 255, 255, 0.06)"
  dark-surface: "rgba(255, 255, 255, 0.02)"
  dark-input: "rgba(255, 255, 255, 0.04)"
  dark-input-line: "rgba(255, 255, 255, 0.09)"
  dark-hover: "rgba(255, 255, 255, 0.035)"
  dark-grid: "rgba(255, 255, 255, 0.022)"
  dark-cell: "#212124"
  dark-level1: "#3f3f46"
  dark-level2: "#71717a"
  dark-level3: "#a1a1aa"
  dark-level4: "#d4d4d8"
  timeline-current: "#34d399"
  timeline-inactive: "#a1a1aa"
  tooltip-bg: "#1e1e20"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "15px"
    lineHeight: 1.6
  biography:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 450
    lineHeight: 1.85
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    letterSpacing: "-0.025em"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  control: "8px"
  panel: "12px"
spacing:
  icon-gap: "12px"
  grid-gap: "16px"
  card-inset: "20px"
  page-inset: "24px"
  section: "80px"
components:
  button-send:
    backgroundColor: "{colors.input}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
    width: "100%"
  button-send-hover:
    backgroundColor: "{colors.hover}"
  input:
    backgroundColor: "{colors.input}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
  project-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
  navigation:
    textColor: "{colors.secondary}"
    height: "64px"
---

# Design System: Yessine Portfolio

## Overview

This implementation follows the user's explicit request to copy [siddz.com](https://siddz.com/). Preserve its compact developer portfolio composition: a narrow centered column, quiet monochrome surfaces, Geist typography, a faint background grid, and small uppercase section labels. Geist and the grid are reference requirements.

The site is a single landing page with biography, projects, experience, education, and contact sections. Existing portfolio content remains in `src/data/portfolio.json`. The normative implementation is `src/styles/global.css`, supported by `src/layouts/Layout.astro` and `src/components/`.

Key characteristics: restrained neutral palette; colorful technology marks and project previews; generous gaps between compact content groups; matching light and dark themes.

## Colors

Use the light tokens by default and the corresponding `dark-` values when `data-theme="dark"` is set on the root. The stylesheet exposes both through the same semantic custom properties, such as `--bg`, `--text`, and `--line`.

`bg` and `text` define the page; `secondary` carries descriptions and navigation; `muted` carries labels and icons. `surface` is a nearly transparent panel fill, `line` separates panels, and `input-line` gives controls a stronger edge. Keep the subtle `grid` tone behind all content. The contribution calendar uses `cell` and `level1` through `level4`; the ramp reverses brightness in dark mode. The current timeline entry uses the small green marker. Preserve technology logos' source colors.

## Typography

Geist is the locally loaded variable display and body face, with Arial and sans-serif fallbacks. JetBrains Mono is locally loaded for section headings. Section headings are uppercase; metadata uses 11px Geist, 500 weight, and 0.14em tracking.

The main heading is 32px/1.25 at 600 weight. Project titles are 16px at 500 weight, descriptions 14px/1.75. Biography copy is 15px/1.85 at 450 weight. The home heading becomes 30px below 768px and 24px below 640px. On small screens biography copy becomes 13.5px. Preserve these compact proportions.

## Layout

The shell and navigation share a centered 768px maximum width. At widths up to 1023px their outer maximum becomes 816px with 24px horizontal padding, retaining a 768px content measure. Navigation is fixed at the top, 64px high, with a fading background and 16px lower padding. Main content starts 144px down, reduced to 120px below 768px.

The fixed decorative grid has 70px cells and 0.5 opacity. It is noninteractive and sits behind content. Project cards use two equal columns with a 16px gap, becoming one column below 640px. The contact section is an unboxed heading and short paragraph with centered social icons below. Section blocks usually start after 80px; contact starts after 96px on larger screens. There is no footer.

The contribution chart retains 53 columns by seven rows with 4px gaps. Its inner width stays at least 580px, or 628px including inset padding on small screens, and scrolls horizontally without widening the page. Technology icons are 36px in the main stack, reduced to 22px below 640px; project technology icons are 20px, reduced to 18px.

## Elevation & Depth

Cards and panels use tonal fills and thin borders without shadows. The header's background fades into the page. Only technology tooltips use `0 4px 8px rgba(0, 0, 0, 0.18)` for separation. Focus uses a 2px `--muted` outline with a 5px offset. Keep reduced-motion support: transitions and animations are disabled, and smooth scrolling becomes automatic.

## Shapes

Panels, project cards, and the avatar use 12px corners; form controls and tooltips use 8px. Preview images use 11px top corners inside the 12px card and a 16:9 frame. Timeline markers are circular; contribution cells remain square. Borders are 1px and use semantic theme colors.

## Components

- **Navigation:** only the profile name (14px Geist at 600 weight inside a link to the top) and the light/dark toggle, positioned at opposite ends of the navbar. The theme button swaps sun/moon icons and rotates its icon slightly on hover; the chosen theme persists in local storage.
- **Additional projects:** a native “More projects” disclosure below the featured grid reveals the remaining eight projects with the same card styling.
- **Project cards:** a 16:9 preview or centered code/title fallback, 20px body padding (16px below 640px), title with destination icons, description, and bottom-aligned technology icons. Hover strengthens the border from `--line` to `--input-line`.
- **Contact:** sentence-case “Get in touch” heading in 16px Geist at 500 weight, followed by 14px text at 1.85 line height. GitHub, LinkedIn, and Email icons are centered with a 28px gap and hover labels. A compact form above the icons uses name and email in two columns (stacked below 480px), a three-row message field, and an inline send button. Its width is capped at 560px with 10px field gaps. Keep the section unboxed, with no booking action or footer; end with 96px bottom space.
- **Technology icons:** preserve source SVG marks and colors. Hover scales the icon to 1.1. Hover and keyboard focus reveal a centered dark tooltip above the icon.
- **Timeline:** a one-pixel vertical rule, 28px text indentation, seven-pixel circular markers, and 40px between entries. The first marker uses green with a faint four-pixel halo.
- **Contribution calendar:** neutral intensity ramp with small tracked uppercase month labels and a low-profile status/legend row. Loading and unavailable states retain the chart layout and provide a GitHub destination.

## Do's and Don'ts

- **Do** preserve the reference's Geist face, narrow measure, faint grid, compact type, and quiet borders.
- **Do** use semantic custom properties so every component follows both themes.
- **Do** retain visible keyboard focus, descriptive icon links, the skip link, and reduced-motion behavior.
- **Do** use the existing portfolio data and project assets when extending pages.
- **Don't** replace the copied visual identity with an unrelated redesign, oversized headings, heavy card shadows, or a new dominant accent.
- **Don't** force the contribution calendar to shrink its cells to fit a mobile viewport; preserve its horizontal scroll.

Evidence: `.impeccable/review/desktop.png`, `mobile.png`, `desktop-dark.png`, and `mobile-dark.png`. Token values above were extracted from the stylesheet; captures document the implemented appearance.
