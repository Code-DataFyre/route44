---
name: Route 44 Command
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e1e7ff'
  surface-container-highest: '#dae2fc'
  on-surface: '#131b2e'
  on-surface-variant: '#40474f'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#717880'
  outline-variant: '#c0c7d0'
  surface-tint: '#076396'
  primary: '#004870'
  on-primary: '#ffffff'
  primary-container: '#006194'
  on-primary-container: '#b2d9ff'
  inverse-primary: '#93ccff'
  secondary: '#b61722'
  on-secondary: '#ffffff'
  secondary-container: '#da3437'
  on-secondary-container: '#fffbff'
  tertiary: '#6a3800'
  on-tertiary: '#ffffff'
  tertiary-container: '#8b4c03'
  on-tertiary-container: '#ffcaa1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930013'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77a'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3a00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fc'
  surface-bg: '#faf8ff'
  glass-fill: rgba(234, 237, 255, 0.6)
  outline-muted: rgba(112, 120, 129, 0.15)
  tertiary-accent: '#894d00'
  success-glow: '#006194'
  warning-glow: '#b61722'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.1em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

Route 44 embodies a "Neural Logistics" aesthetic—a sophisticated blend of **Corporate Modernism** and **Glassmorphism**. The brand personality is precise, high-tech, and authoritative, designed for enterprise-level global operations.

The visual style leverages technical overlays, including subtle grid backgrounds and interactive vector paths, to evoke the feeling of a high-stakes command center. The atmosphere is professional yet innovative, utilizing deep blues and sharp crimson accents to signify both stability and urgent action. UI elements use translucent layers and backdrop blurs to maintain a sense of depth without overwhelming the user with heavy shadows.

## Colors

The palette is anchored by **Deep Command Blue** (Primary) and **Tactical Crimson** (Secondary). 

- **Primary (#006194):** Used for key actions, active navigation states, and "safe" system indicators.
- **Secondary (#b61722):** Reserved for high-priority alerts, "Launch" actions, and critical rerouting nodes.
- **Neutral (#131b2e):** A dark navy used for text and deep structural elements to maintain higher legibility than pure black.
- **Surface (#faf8ff):** A very light, cool-tinted lavender-white that prevents eye strain during long monitoring sessions.

The system uses a "Fidelity" variant approach where containers often take on a translucent version of the surface color to allow background patterns (like the grid or map) to peak through.

## Typography

The system utilizes a dual-font strategy: **Geist** for technical precision and **Inter** for legible information density.

- **Geist (Headlines & Labels):** Provides a clean, slightly condensed technical feel. High-contrast weights (Bold/SemiBold) are used for emphasis and navigational elements.
- **Inter (Body):** Used for all long-form text and descriptions. Its neutral character ensures that complex logistics data remains readable.
- **JetBrains Mono:** Introduced for specific telemetry data (coordinates, velocity) to reinforce the "command center" aesthetic.

For mobile, `display-lg` scales down to 32px to ensure heading impact without causing layout breakage.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy centered within a 1280px container. 

- **Desktop:** Employs a 12-column grid with 24px gutters. Sections use generous vertical padding (96px to 128px) to define distinct phases of the user journey.
- **Mobile:** Reflows to a single-column stack with 20px side margins. Navigation collapses into a simplified bar or hamburger menu.
- **Rhythm:** All spacing is derived from a 4px base unit. Component internal padding typically follows a 12px/16px (3u/4u) pattern for density.

## Elevation & Depth

Hierarchy is established primarily through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.

- **Surface Layers:** The base background is `#faf8ff`. Secondary areas use `surface-container-low` (#f2f3ff).
- **Glass Panels:** Primary cards and HUD elements use a semi-transparent fill (`rgba(234, 237, 255, 0.6)`) with a `20px` backdrop blur.
- **Low-Contrast Outlines:** Instead of shadows, elements are defined by `1px` borders in `outline-variant` at 30% opacity.
- **Accent Glows:** Critical interactive elements use a subtle outer glow (e.g., `0 0 15px rgba(182, 23, 34, 0.15)`) to indicate "Live" or "Active" states.

## Shapes

The shape language is **Soft-Technical**. While the overall grid is rigid, corners are softened to feel modern and accessible.

- **Buttons & Inputs:** Use a standard `8px` (rounded-lg) corner radius.
- **Cards & Panels:** Use a `12px` or `16px` (rounded-xl) radius to create a distinct container feel.
- **Status Badges:** Use "Pill" shapes (full rounding) to contrast against the more structural rectangular panels.

## Components

### Buttons
- **Primary:** Solid background (`primary`), white text, bold Geist label. Includes a subtle "brightness" hover effect.
- **Tactical (Secondary):** Solid `secondary` color with a `coral-glow` shadow. Used exclusively for high-intent actions like "Launch" or "Deploy".
- **Ghost/Outline:** `1px` border with `on-surface` text; used for secondary navigation or "View More" actions.

### Cards & Bento Grid
- Panels should use the `glass-panel` class: backdrop blur, thin translucent border, and subtle internal padding (32px).
- **Stat Cards:** Feature a 4px left-border accent in the representative color (Primary for volume, Secondary for alerts).

### Inputs & HUD Elements
- HUD elements (telemetry) are compact, using `label-sm` for headers and `mono-data` for values.
- Search bars should be integrated into the navigation with minimal borders, relying on the glass background for definition.

### Badges
- **Live Status:** A pill-shaped container with a 10% opacity fill of the status color and a 2px pulsing dot.