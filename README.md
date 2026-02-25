# @manda/ui-design-system

Shared design system, brand tokens, and multi-theme MUI presets for Lexabit applications.

## Overview

This package is the single source of truth for brand identity, design tokens, and MUI themes across all Manda frontend applications. It provides a theme factory, runtime-switchable presets with light/dark mode support, and React providers/hooks for theme management.

## Installation

```bash
npm install github:Flavarus/ui-design-system
```

### Peer Dependencies

```json
{
  "@emotion/react": "^11.11.0",
  "@emotion/styled": "^11.11.0",
  "@mui/material": "^5.14.0",
  "react": "^18.2.0",
  "react-admin": "^5.0.0",
  "react-dom": "^18.2.0"
}
```

## Usage

### Basic Setup

Wrap your application with the `ThemePresetProvider`:

```tsx
import { ThemePresetProvider, allPresets } from '@manda/ui-design-system';
import { ThemeProvider } from '@mui/material/styles';
import { useThemePreset } from '@manda/ui-design-system';

function App() {
  return (
    <ThemePresetProvider
      presets={allPresets}
      defaultPresetId="lexabit-professional"
    >
      <ThemedApp />
    </ThemePresetProvider>
  );
}

function ThemedApp() {
  const { theme, mode, darkTheme } = useThemePreset();

  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : theme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Creating a Theme Directly

If you don't need runtime preset switching, create a theme directly:

```tsx
import { createLexabitTheme, lexabitProfessional } from '@manda/ui-design-system';
import { ThemeProvider } from '@mui/material/styles';

const theme = createLexabitTheme(lexabitProfessional, 'light');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Switching Presets and Modes at Runtime

```tsx
import { useThemePreset } from '@manda/ui-design-system';

function ThemeSelector() {
  const { presetId, mode, setPreset, toggleMode, availablePresets } = useThemePreset();

  return (
    <div>
      <select value={presetId} onChange={e => setPreset(e.target.value)}>
        {availablePresets.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
      <button onClick={toggleMode}>
        {mode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
```

The provider persists the user's selection to `localStorage` automatically.

### Accessing Design Tokens

```tsx
import { useDesignTokens } from '@manda/ui-design-system';

function MyComponent() {
  const tokens = useDesignTokens();
  // tokens.colors.brand.primary → '#3054E7'
  // tokens.colors.semantic.success → '#4CAF50'
  // tokens.colors.role.admin → '#F57C00'
  // tokens.typography.fontFamilies.primary → 'Inter'
  // tokens.spacing.md → 16
}
```

Or import tokens directly:

```tsx
import { brandColors, semanticColors, roleColors } from '@manda/ui-design-system';
```

### Using Theme Values in Components

```tsx
import { useTheme } from '@mui/material/styles';

function Card() {
  const theme = useTheme();

  return (
    <Box sx={{
      bgcolor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius / 8,
      boxShadow: theme.customShadows.card,
      p: 2,
      '&:hover': { boxShadow: theme.customShadows.cardHover },
    }}>
      <Typography variant="h6">Title</Typography>
    </Box>
  );
}
```

### Accessing Lexabit-Specific Theme Extensions

The theme includes custom extensions under `theme.lexabit` and `theme.customShadows`:

```tsx
const theme = useTheme();

// Role colors (for permission badges, etc.)
theme.lexabit.roleColors.admin   // '#F57C00'
theme.lexabit.roleColors.owner   // '#D32F2F'
theme.lexabit.roleColors.manager // '#1976D2'

// Custom shadow levels
theme.customShadows.card      // Default card elevation
theme.customShadows.cardHover // Hover state
theme.customShadows.dropdown  // Menus, popovers
theme.customShadows.modal     // Dialogs

// Current preset ID
theme.lexabit.presetId        // 'lexabit-professional'
```

### Internationalization

The package includes English and Norwegian translations for preset names and descriptions:

```tsx
import en from '@manda/ui-design-system/i18n/en';
import no from '@manda/ui-design-system/i18n/no';

// Merge with your app's translations
const messages = {
  en: { ...yourEnglishMessages, ...en },
  no: { ...yourNorwegianMessages, ...no },
};
```

## Theme Presets

6 presets are available. Users can switch between them at runtime.

| Preset | ID | Primary | Shape | Density | Shadows | Motion |
|--------|----|---------|-------|---------|---------|--------|
| Professional | `lexabit-professional` | #3054E7 | 6px | default | medium | default |
| Nordic Frost | `nordic-frost` | #546E7A | 2px | compact | subtle | fast |
| Midnight Focus | `midnight-focus` | #5C6BC0 | 8px | comfortable | dramatic | relaxed |
| Warm Earth | `warm-earth` | #BF5B3D | 12px | default | medium | default |
| Ocean Breeze | `ocean-breeze` | #00897B | 10px | comfortable | subtle | relaxed |
| Playful Vivid | `playful-vivid` | #6366F1 | 10px | default | indigo-tinted | default |

Each preset has full light and dark mode support.

## Exports

### Theme Factory

| Export | Description |
|--------|-------------|
| `createLexabitTheme(preset, mode)` | Creates a complete MUI `Theme` from a preset and `'light'` or `'dark'` mode |

### Presets

| Export | Description |
|--------|-------------|
| `lexabitProfessional` | Default brand theme |
| `lexabitClassic` | Classic portal look (Roboto, MUI defaults) |
| `nordicFrost` | Scandinavian minimalism, compact |
| `midnightFocus` | Deep immersive theme for dark environments |
| `warmEarth` | Warm tones with serif headings |
| `oceanBreeze` | Calm teal tones, light weights |
| `allPresets` | Array of all available presets |

### Providers and Hooks

| Export | Description |
|--------|-------------|
| `ThemePresetProvider` | Context provider — manages preset selection, mode, and localStorage persistence |
| `ThemePresetContext` | Raw React context (use `useThemePreset` instead) |
| `useThemePreset()` | Access preset ID, mode, theme objects, and switching functions |
| `useDesignTokens()` | Access raw design tokens (colors, typography, spacing, borders, shadows) |

### Design Tokens

| Export | Description |
|--------|-------------|
| `brandColors` | Primary, secondary, tertiary brand colors |
| `semanticColors` | Success, warning, error, info |
| `neutralColors` | Greys and surface colors |
| `roleColors` | Permission role colors (owner, admin, manager, etc.) |
| `sourceColors` | Data source colors |
| `fontFamilies`, `fontSizes`, `fontWeights`, `lineHeights` | Typography tokens |
| `baseTypography` | Base MUI `TypographyOptions` |
| `spacingScale`, `baseSpacing`, `densityConfig` | Spacing tokens and density configs |
| `shadowPresets` | Shadow sets by intensity |
| `borderRadiusScale` | Border radius tokens |
| `motionSpeed`, `baseTransitions` | Animation speed multipliers and easing curves |
| `baseBreakpoints`, `customBreakpoints` | Responsive breakpoints |

### Component Overrides

| Export | Description |
|--------|-------------|
| `sharedComponentOverrides` | Base MUI component style overrides |
| `raComponentOverrides` | React Admin-specific component overrides |

### Types

| Export | Description |
|--------|-------------|
| `ThemePreset` | Full preset definition interface |
| `ThemePresetContextValue` | Context value type |
| `PresetPaletteConfig` | Palette config for light/dark |
| `ShadowPreset` | Shadow level definitions |
| `ShadowIntensity`, `SpacingDensity`, `MotionSpeed` | Enum-like union types |

## Development

```bash
# Type check
npm run typecheck

# Build (outputs to dist/)
npm run build

# Watch mode
npm run dev
```

## License

UNLICENSED - Internal Manda use only.
