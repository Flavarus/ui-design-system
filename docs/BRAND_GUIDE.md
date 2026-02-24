# Lexabit Brand Guide

## Brand Identity

Lexabit is a compliance and financial intelligence SaaS platform serving Nordic law firms. The brand communicates **trust**, **precision**, and **modern professionalism**.

## Brand Color

**Primary: #3054E7 (Manda Blue)**

This is the canonical Lexabit brand color. It conveys trust, authority, and technological competence — essential qualities for a compliance platform handling sensitive financial data for law firms.

| Variant | Hex | Usage |
|---------|-----|-------|
| Main | #3054E7 | CTAs, primary actions, active states, links |
| Dark | #2240B8 | Hover states, pressed states, emphasis |
| Light | #EBF0FD | Backgrounds, subtle highlights, selected rows |
| Contrast | #FFFFFF | Text on primary-colored backgrounds |

### Color Application Rules

- **Primary actions** (buttons, links, active tabs) use brand blue
- **Semantic colors** (success/warning/error/info) follow Material Design standards — never use brand blue for status
- **Role colors** are domain-specific and must not be changed (Owner=Red, Admin=Orange, Manager=Blue, etc.)
- **Never use color alone** to convey meaning — always pair with text labels or icons
- **Minimum contrast**: 4.5:1 for normal text, 3:1 for large text (WCAG AA)

## Typography

**Primary UI Font: Inter**

Inter is optimized for screen readability at small sizes — ideal for data-dense compliance interfaces.

```
Font stack: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

**Monospace: JetBrains Mono** — for code, IDs, technical data
```
Font stack: 'JetBrains Mono', 'Fira Code', Consolas, monospace
```

**Serif (preset-specific): Playfair Display** — used only in the Warm Earth theme preset
```
Font stack: 'Playfair Display', Georgia, 'Times New Roman', serif
```

### Typography Scale

| Variant | Size | Weight | Use Case |
|---------|------|--------|----------|
| h1 | 32px | 600 | Page titles |
| h2 | 28px | 600 | Section headers |
| h3 | 24px | 500 | Subsection headers |
| h4 | 20px | 500 | Card titles |
| h5 | 18px | 500 | Group headers |
| h6 | 16px | 500 | Small headers |
| body1 | 16px | 400 | Primary body text |
| body2 | 14px | 400 | Secondary body text, table cells |
| caption | 11px | 400 | Metadata, timestamps |
| button | 14px | 500 | Button labels (no uppercase) |

## Voice and Tone

Lexabit serves compliance professionals at Nordic law firms. The communication style is:

- **Clear over clever** — No jargon unless it's domain-standard compliance terminology
- **Professional but approachable** — Not cold or bureaucratic
- **Precise** — Exact numbers, exact statuses, exact dates
- **Action-oriented** — Labels say what happens ("Save changes", not "Submit")
- **Bilingual** — All text supports English and Norwegian (Norwegian is ~20-30% longer)

## Spacing

**Base unit: 8px**

All spacing follows an 8px grid system:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight gaps (icon-to-text) |
| sm | 8px | Compact spacing |
| md | 16px | Standard padding |
| lg | 24px | Section spacing |
| xl | 32px | Large sections |
| 2xl | 48px | Page sections |
| 3xl | 64px | Major divisions |

## Icons

- **MUI Icons** (`@mui/icons-material`) is the primary icon set
- **Never use emojis** as icons in the UI
- Icons must have consistent sizing (typically 24x24px)
- Always provide `aria-label` on icon-only buttons

## Logo

The Lexabit logo usage rules:
- Minimum clear space: equal to the logo's "L" height on all sides
- Minimum display size: 24px height
- On dark backgrounds: use white version
- On light backgrounds: use brand blue (#3054E7) version
- Never stretch, rotate, or alter the logo proportions
