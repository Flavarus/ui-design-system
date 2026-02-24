import type { Components, Theme } from '@mui/material/styles';
import type { TypographyOptions } from '@mui/material/styles/createTypography';

// ---------------------------------------------------------------------------
// Scalar option types
// ---------------------------------------------------------------------------

/** Shadow intensity levels controlling overall shadow darkness. */
export type ShadowIntensity = 'subtle' | 'medium' | 'dramatic';

/** Spacing density: affects the base spacing unit. */
export type SpacingDensity = 'compact' | 'default' | 'comfortable';

/** Animation speed multiplier. */
export type MotionSpeed = 'fast' | 'default' | 'relaxed';

// ---------------------------------------------------------------------------
// Shadow preset
// ---------------------------------------------------------------------------

/** Named shadow values used through `theme.customShadows`. */
export interface ShadowPreset {
  card: string;
  cardHover: string;
  dropdown: string;
  modal: string;
}

// ---------------------------------------------------------------------------
// Palette configuration
// ---------------------------------------------------------------------------

/** Palette overrides for a single color-scheme (light or dark). */
export interface PresetPaletteConfig {
  primary: { main: string; dark: string; light: string; contrastText: string };
  secondary: { main: string; dark: string; light: string; contrastText: string };
  success?: { main: string; dark: string; light: string; contrastText: string };
  warning?: { main: string; dark: string; light: string; contrastText: string };
  error?: { main: string; dark: string; light: string; contrastText: string };
  info?: { main: string; dark: string; light: string; contrastText: string };
  background: { default: string; paper: string };
  text: { primary: string; secondary: string; disabled: string };
  divider: string;
  action?: {
    active?: string;
    hover?: string;
    selected?: string;
    disabled?: string;
    disabledBackground?: string;
  };
}

// ---------------------------------------------------------------------------
// Theme preset definition
// ---------------------------------------------------------------------------

/** The full theme-preset definition consumed by `createLexabitTheme`. */
export interface ThemePreset {
  /** Unique identifier for the preset. */
  id: string;
  /** i18n key for the display name. */
  name: string;
  /** i18n key for the description. */
  description: string;
  /** Color palettes for light and dark modes. */
  palette: {
    light: PresetPaletteConfig;
    dark: PresetPaletteConfig;
  };
  /** Optional typography overrides — can set fontFamily, or override individual
   *  MUI variants (h1-h6, body1/2, button, etc.) with fontSize, fontWeight,
   *  letterSpacing, textTransform, and more. Merged on top of base typography. */
  typography?: Partial<TypographyOptions>;
  /** Border radius in pixels. */
  shape: { borderRadius: number };
  /** Spacing density level. */
  density: SpacingDensity;
  /** Shadow configuration. */
  shadows: ShadowPreset;
  /** Animation speed. */
  motion: MotionSpeed;
  /** Optional additional component overrides specific to this preset. */
  componentOverrides?: (theme: Theme) => Components;
}

// ---------------------------------------------------------------------------
// Theme preset provider context
// ---------------------------------------------------------------------------

/** Value exposed by the ThemePresetProvider React context. */
export interface ThemePresetContextValue {
  presetId: string;
  mode: 'light' | 'dark';
  setPreset: (id: string) => void;
  setMode: (mode: 'light' | 'dark') => void;
  toggleMode: () => void;
  theme: Theme;
  darkTheme: Theme;
  availablePresets: ThemePreset[];
  currentPreset: ThemePreset;
}
