# Design System Strategy: The Kinetic Monolith

## 1. Overview & Creative North Star
The logistics industry is often defined by grit and industrial utility. This design system elevates that utility into a high-end editorial experience titled **"The Kinetic Monolith."** 

The Creative North Star focuses on the intersection of **Precision Engineering** and **Fluid Motion**. We move beyond the standard "trucking website" template by utilizing intentional asymmetry, high-contrast typographic scales, and a depth-first layout strategy. The interface should feel like a premium architectural journal: authoritative, spacious, and meticulously organized. We replace rigid grid lines with tonal shifts, creating a digital environment that feels as structured as a global supply chain yet as seamless as modern automation.

---

## 2. Colors
Our palette is anchored by a commanding Deep Red (`primary: #6e0609`), supported by industrial slates and sophisticated off-whites.

### The "No-Line" Rule
To maintain an editorial feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined solely through background color shifts. Use `surface-container-low` (#f3f3f3) sections sitting against a `surface` (#f9f9f9) background to denote a change in context.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create nested depth:
*   **Base:** `surface` (#f9f9f9)
*   **Sectioning:** `surface-container-low` (#f3f3f3)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff)
*   **Information Overlays:** `surface-container-high` (#e8e8e8)

### The "Glass & Gradient" Rule
For floating elements (like navigation bars or hovering action buttons), use **Glassmorphism**. Apply a semi-transparent `on_secondary_container` with a `backdrop-blur` of 12px to allow the deep reds and imagery to bleed through softly.

### Signature Textures
Avoid flat primary blocks. Use a subtle linear gradient (135deg) transitioning from `primary` (#6e0609) to `primary_container` (#8f211d) for Hero sections and CTA buttons to provide a sense of "automotive finish" and professional polish.

---

## 3. Typography
The typographic system uses **Plus Jakarta Sans** for high-impact displays and **Inter** for technical precision.

*   **Display (Plus Jakarta Sans):** Large, bold, and unapologetic. Used for headlines that need to feel like environmental signage. The high-contrast scale between `display-lg` (3.5rem) and `body-md` (0.875rem) creates the signature editorial rhythm.
*   **Headline (Plus Jakarta Sans):** Set with tight letter-spacing (-0.02em) to mimic the "Heavy" weight of the brand's original Avenir influence, projecting authority.
*   **Title & Body (Inter):** Inter provides the functional clarity required for logistics data. It conveys reliability and modern efficiency.
*   **Label (Inter):** Always uppercase with increased tracking (+0.05em) when used for categories or navigation, creating an architectural feel.

---

## 4. Elevation & Depth
We eschew traditional "drop shadows" in favor of **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a natural "lift" based on color perception rather than artificial shadows.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, it must be an "Ambient Shadow": `box-shadow: 0 10px 40px rgba(26, 28, 28, 0.06);`. The shadow color is derived from `on-surface` to ensure it feels like a natural shadow on a white surface.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` (#dfbfbb) at 15% opacity. It should be felt, not seen.
*   **Motion Depth:** When hovering over interactive surfaces, transition the background color one tier higher (e.g., from `surface-container-low` to `surface-container-highest`) rather than moving the element's position.

---

## 5. Components

### Buttons
*   **Primary:** Linear gradient (`primary` to `primary_container`), white text, `md` (0.375rem) corner radius. No border.
*   **Secondary:** Ghost style. Transparent background with a `primary` label. No border.
*   **Tertiary:** `secondary_container` (#c0ddfe) background with `on_secondary_container` (#46617e) text.

### Cards & Tracking Lists
*   **Rule:** Forbid divider lines.
*   **Execution:** Separate logistics milestones or list items using `8` (2rem) vertical white space. Use a `surface-container-lowest` background for the "Active" item and `surface-container-low` for inactive items to create clear hierarchy without clutter.

### Input Fields
*   **Style:** Minimalist. No bottom line or box. Use a subtle `surface-container-high` (#e8e8e8) fill with `md` rounded corners.
*   **States:** On focus, the background shifts to `surface-container-lowest` with a 1px `primary` "Ghost Border" at 20% opacity.

### Fleet Chips
*   **Usage:** For categorizing vehicle types (e.g., "Heavy Haulage"). 
*   **Style:** `tertiary_fixed_dim` (#c6c6c6) background with `on_tertiary_fixed` (#1a1c1c) text. Circular (`full` radius) for a streamlined look.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts where text blocks are offset from images to create "white space tension."
*   **Do** use large-scale imagery (e.g., macro shots of truck details) as background elements with `surface-dim` overlays.
*   **Do** use the `12` (3rem) and `16` (4rem) spacing tokens for section padding to ensure the design "breathes."

### Don't:
*   **Don't** use 100% black text. Always use `on_surface` (#1a1c1c) for better readability and a premium feel.
*   **Don't** use sharp 0px corners. Even a logistics company needs the approachability of the `sm` (0.125rem) or `md` (0.375rem) radius scale.
*   **Don't** use traditional "Dividers." If a separation is needed, use a `surface-container` background shift or 48px of empty space.