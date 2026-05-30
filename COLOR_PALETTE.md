# Todo-List Project Color Palette - Dark Mode

Theme Name: Organic Modernist (Dark Edition)
Design Style: Modern, deep, nature-inspired, and highly focused.
Goal: A premium dark mode aesthetic that stands out from generic productivity apps by replacing harsh near-black/neon-blue combos with organic, soothing dark forest slate tones and high-contrast, luminous accents.

## 1. Color Palette Table

| UI Position / Role | Color Name | Hexadecimal Value | Recommended Contrast Check |
| :--- | :--- | :--- | :--- |
| **Main App Canvas Background** | Deep Forest Charcoal | #121613 | Very High (Rich dark organic base) |
| **Sidebar & Navigation Background** | Muted Pine Dark | #1A201C | Balanced (Slightly lighter organic dark green-grey) |
| **Containers & Task Card Background** | Elevated Moss Slate | #222A25 | High Surface Separation (Sleek cards) |
| **Primary Text & Main Headings** | Warm Alabaster | #ECF2EE | Extremely High Contrast (Soft cream-white text) |
| **Secondary Text & Metadata (Dates)** | Muted Sage Grey | #A2B0A6 | Medium-High (Gentle secondary metadata) |
| **Borders, Dividers, & Lines** | Subtle Forest Border | #2F3A33 | Low-Medium (Sophisticated boundaries) |
| **Active Categories & Sidebar Focus** | Luminous Grape | #C4A6D1 | High (Soft lavender-plum, pops on dark backgrounds) |
| **Selected List Highlighting Background** | Deep Plum Tint | #2C2033 | Soft Contrast (Dark glowing grape background) |
| **Primary Interactive Action Buttons (CTAs)** | Luminous Mint | #54C9B9 | Exceptional Visibility (Crisp ocean-teal/mint with 10:1 dark contrast) |
| **High Priority Tasks** | Sunset Coral | #E78C6E | High Contrast (Muted warm rose-coral highlight) |
| **Medium Priority Tasks & Warnings** | Ochre Sand | #F4B97F | High Contrast (Warm pastel amber-gold) |
| **Low Priority Tasks & Complete States** | Soft Moss Green | #95B89D | Medium-High Contrast (Calming luminous green) |

---

## 2. Dialogs & Overlays Specification

To handle forms, creation cards, and task configuration details, use this layering system for popups and modal dialogs:

* **Dialog Backdrop Overlay:** Semi-transparent dark mask to obscure background elements. Use Deep Forest Charcoal with 65% opacity (#121613 at 65% opacity).
* **Dialog Surface Background:** A further elevated layer that visually sits on top of cards. Use Deep Olive Slate (#2B352E).
* **Dialog Border Highlight:** A crisp border to define the dialog box edges. Use Subtle Olive Border (#3F4E44).
* **Dialog Form Fields (Inputs & Textareas) Background:** Use Muted Pine Dark (#1A201C) to make the text areas feel modern, indented, and clean.
* **Dialog Form Fields Border:** Use Subtle Forest Border (#2F3A33) under normal conditions, and transition to Luminous Mint (#54C9B9) when focused.
* **Dialog Submit Button:** Use Luminous Mint (#54C9B9) for active submissions, and Muted Sage Grey (#A2B0A6) for cancel/abort actions.

---

## 3. Visual Positions Mapping

### App-wide Foundations
* **Main Screen Canvas:** The primary application body background uses Deep Forest Charcoal (#121613).
* **Base Text Color:** All default body text, labels, and paragraph copy use Warm Alabaster (#ECF2EE).
* **Metadata & Secondary Labels:** Task due dates, subtitles, and low-priority labels use Muted Sage Grey (#A2B0A6).
* **Component Containers:** The background for task lists, details panes, and default content blocks uses Elevated Moss Slate (#222A25).
* **Borders & Rules:** All lines, container boundaries, and panel separators use Subtle Forest Border (#2F3A33).

### Sidebar & Navigation Panels
* **Panel Background:** The sidebar container uses Muted Pine Dark (#1A201C).
* **Individual Navigation Items:** Idle list items use Elevated Moss Slate (#222A25) or transparent backgrounds.
* **Navigation Item Hover State:** Hovering over sidebar lists uses Deep Plum Tint (#2C2033).
* **Active Selected Navigation Item:** The currently selected list/project title text uses Luminous Grape (#C4A6D1) with a Deep Plum Tint (#2C2033) background highlight.

### Buttons & Interactive Elements
* **Primary Interactive Actions:** Creating a new task, main action trigger, and active submit inputs use Luminous Mint (#54C9B9) with Deep Forest Charcoal (#121613) text on top of the button to guarantee outstanding readability.
* **Secondary Actions:** Close buttons, cancel toggles, and edit actions use Muted Sage Grey (#A2B0A6) or transparent overlays.

### Tasks & Priority Statuses
* **High Priority indicator:** High priority task labels, exclamation marks, or priority tags use Sunset Coral (#E78C6E).
* **Medium Priority indicator:** Medium priority labels or warning indicators use Ochre Sand (#F4B97F).
* **Low Priority indicator:** Low priority task labels or tags use Soft Moss Green (#95B89D).
* **Completed States:** Completed task checkboxes, checked labels, and strikethrough text use Soft Moss Green (#95B89D) or are dimmed to Deep Forest Charcoal tints.
