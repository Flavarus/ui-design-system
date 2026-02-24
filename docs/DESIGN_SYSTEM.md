# Lexabit Design System — AI Reference

This is the master reference for the Lexabit design system. All agents building UI must read this document first.

## Package

`@manda/ui-design-system` at `packages/react/ui-design-system/`

## Quick Reference

| Category | Source File | Import From |
|----------|-----------|-------------|
| Brand colors | `src/tokens/colors.ts` | `@manda/ui-design-system` |
| Typography | `src/tokens/typography.ts` | `@manda/ui-design-system` |
| Spacing | `src/tokens/spacing.ts` | `@manda/ui-design-system` |
| Shadows | `src/tokens/shadows.ts` | `@manda/ui-design-system` |
| Theme factory | `src/themes/createLexabitTheme.ts` | `@manda/ui-design-system` |
| Theme presets | `src/themes/presets/` | `@manda/ui-design-system` |
| MUI overrides | `src/components/overrides.ts` | `@manda/ui-design-system` |
| Provider | `src/providers/ThemePresetProvider.tsx` | `@manda/ui-design-system` |
| Hook | `src/hooks/useThemePreset.ts` | `@manda/ui-design-system` |

## Pattern: Using the Design System

### Creating themed components

```typescript
import { useTheme } from '@mui/material/styles';

const MyComponent = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      bgcolor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius / 8, // Use theme's border radius
      boxShadow: theme.customShadows.card,         // Use custom shadows
      p: 2,                                         // Use theme spacing (2 * 8px = 16px)
    }}>
      <Typography variant="h6">{translate('feature.title')}</Typography>
    </Box>
  );
};
```

### Accessing theme preset info

```typescript
import { useThemePreset } from '@manda/ui-design-system';

const ThemeInfo = () => {
  const { presetId, mode, setPreset, toggleMode, availablePresets } = useThemePreset();
  // presetId: current preset ID
  // mode: 'light' | 'dark'
  // setPreset(id): switch to a different preset
  // toggleMode(): switch light/dark
  // availablePresets: all available ThemePreset objects
};
```

### Accessing role colors

```typescript
const theme = useTheme();
const roleColor = theme.lexabit.roleColors.admin; // '#F57C00'
```

## Style: Colors

### Brand Palette
- **Primary**: #3054E7 (Manda Blue) — CTAs, active states, links
- **Secondary**: #5C6BC0 — Supporting actions, accents
- **Tertiary**: #7C4DFF — Highlights, badges

### Semantic Colors (DO NOT CHANGE)
- **Success**: #4CAF50 — Compliant, verified, low risk
- **Warning**: #FF9800 — Needs attention, expiring, medium risk
- **Error**: #F44336 — Non-compliant, expired, high risk
- **Info**: #2196F3 — Informational, pending review

### Role Colors (Domain-specific, DO NOT CHANGE)
- **Owner**: #D32F2F (Red)
- **Admin**: #F57C00 (Orange)
- **Manager**: #1976D2 (Blue)
- **Member**: #388E3C (Green)
- **Viewer**: #616161 (Gray)
- **Billing**: #7B1FA2 (Purple)
- **Custom**: #00796B (Teal)

## Style: Typography

- Font: Inter (sans-serif) — exception: Classic preset uses Roboto to match the original portal
- Button text: **never uppercase** (`textTransform: 'none'`) — exception: Classic preset uses uppercase buttons/tabs to match the original portal
- Body text: 14-16px, line-height 1.5
- Headings: 16-32px, weight 500-600 — Classic preset uses MUI default heading sizes (larger)
- Caption: 11px for metadata, timestamps

## Style: Spacing

- Base unit: 8px
- Use `theme.spacing(n)` — n=1 is 8px, n=2 is 16px, etc.
- Named tokens: xs(4), sm(8), md(16), lg(24), xl(32)

## Style: Shadows

Access via `theme.customShadows`:
- `card` — Default card elevation
- `cardHover` — Card on hover
- `dropdown` — Menus, popovers
- `modal` — Dialogs, modals

## Style: Shape

- Default border radius: 6px (via `theme.shape.borderRadius`)
- Varies by preset: 2px (sharp) to 16px (pill-like)

## Anti-Patterns (DO NOT)

| Don't | Do Instead |
|-------|-----------|
| Hardcode hex colors in components | Use `theme.palette.*` or token imports |
| Use raw px spacing | Use `theme.spacing()` |
| Use raw boxShadow strings | Use `theme.customShadows.*` |
| Use `createTheme` from MUI directly | Use `createLexabitTheme` from the package |
| Use emojis as icons | Use `@mui/icons-material` |
| Hardcode user-facing strings | Use `useTranslate()` from react-admin |
| Use `textTransform: 'uppercase'` on buttons | Keep `textTransform: 'none'` |
| Use `style={{}}` on MUI components | Use the `sx` prop |
| Rely on color alone for status | Pair with text label or icon |

## Effects: Transitions

- Micro-interactions: 150-300ms
- Use `transform` and `opacity` for performance (not `width`/`height`)
- Respect `prefers-reduced-motion` for accessibility
- Speed varies by preset: fast (0.7x), default (1.0x), relaxed (1.3x)

## Theme Presets

6 presets available for the portal (users can switch at runtime):

| Preset | Primary | Shape | Density | Shadows | Motion |
|--------|---------|-------|---------|---------|--------|
| Professional | #3054E7 | 6px | default | medium | default |
| Nordic Frost | #546E7A | 2px | compact | subtle | fast |
| Midnight Focus | #5C6BC0 | 8px | comfortable | dramatic | relaxed |
| Warm Earth | #BF5B3D | 12px | default | medium | default |
| Ocean Breeze | #00897B | 10px | comfortable | subtle | relaxed |
| Playful Vivid | #6366F1 | 10px | default | indigo-tinted | default |

Each preset has full light and dark mode support.

## Accessibility Requirements

- **Contrast**: WCAG AA minimum (4.5:1 normal text, 3:1 large text)
- **Touch targets**: 44x44px minimum
- **Focus indicators**: Visible focus ring on all interactive elements
- **Keyboard navigation**: Logical tab order, all actions keyboard-accessible
- **Screen readers**: ARIA labels on icon-only buttons, semantic HTML
- **Status**: Never color alone — use icon + text + color
- **Motion**: Check `prefers-reduced-motion`

## i18n Requirements

- ALL user-facing text must use translation keys
- Support: English (en) + Norwegian (no)
- Norwegian text is 20-30% longer — design for text expansion
- Translation keys for preset names/descriptions in `@manda/ui-design-system/i18n/en` and `/no`

## File Locations

```
packages/react/ui-design-system/
  src/
    tokens/          — Design tokens (colors, typography, spacing, etc.)
    themes/          — Theme factory + presets
    components/      — Shared MUI component overrides
    providers/       — ThemePresetProvider
    hooks/           — useThemePreset, useDesignTokens
    i18n/            — EN/NO translations for preset names
  docs/
    BRAND_GUIDE.md   — Logo, colors, voice, tone
    DESIGN_SYSTEM.md — This file (AI reference)
    THEME_PRESETS.md — Preset details and use cases
    FIGMA_WORKFLOW.md — Figma sync process
```
