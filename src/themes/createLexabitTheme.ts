/**
 * Theme factory for the Manda / Lexabit design system.
 *
 * Creates a fully-configured MUI Theme from a `ThemePreset` and a colour mode.
 * Uses the same two-phase `createTheme` pattern as the admin panel
 * (`lexabit-admin/src/theme/index.ts`):
 *
 *   1. First pass: build the base theme with palette, typography, spacing, etc.
 *   2. Second pass: apply component overrides that can reference the base theme
 *      (including `customShadows`, colours, transitions, ...).
 */

import { createTheme, type Theme, type Components } from '@mui/material/styles';
import type { TypographyOptions } from '@mui/material/styles/createTypography';

import { baseTypography } from '../tokens/typography';
import { baseBreakpoints } from '../tokens/breakpoints';
import { densityConfig } from '../tokens/spacing';
import { motionSpeed, baseTransitions } from '../tokens/motion';
import { roleColors, sourceColors } from '../tokens/colors';
import { sharedComponentOverrides } from '../components/overrides';
import { raComponentOverrides } from '../components/ra-overrides';
import type { ThemePreset, ShadowPreset } from './types';

// ---------------------------------------------------------------------------
// MUI Module Augmentation
// ---------------------------------------------------------------------------

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      card: string;
      cardHover: string;
      dropdown: string;
      modal: string;
    };
    lexabit: {
      presetId: string;
      roleColors: Record<string, string>;
      sourceColors: Record<string, string>;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      card?: string;
      cardHover?: string;
      dropdown?: string;
      modal?: string;
    };
    lexabit?: {
      presetId?: string;
      roleColors?: Record<string, string>;
      sourceColors?: Record<string, string>;
    };
  }
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * Merges the base typography options with any preset-level overrides.
 * Supports both scalar overrides (fontFamily) and per-variant objects
 * (h4, button, etc.) via shallow merge per variant.
 */
function buildTypography(preset: ThemePreset): TypographyOptions {
  if (!preset.typography) return { ...baseTypography };

  const merged: TypographyOptions = { ...baseTypography };

  for (const [key, value] of Object.entries(preset.typography)) {
    const base = (merged as Record<string, unknown>)[key];
    if (typeof value === 'object' && value !== null && typeof base === 'object' && base !== null) {
      // Deep merge variant objects (e.g. h4, button)
      (merged as Record<string, unknown>)[key] = { ...base, ...value };
    } else {
      // Scalar overrides (fontFamily, fontWeightRegular, etc.)
      (merged as Record<string, unknown>)[key] = value;
    }
  }

  return merged;
}

/**
 * Returns the effective spacing factor (px per unit) for a given density.
 */
function getSpacingFactor(density: ThemePreset['density']): number {
  return densityConfig[density].unit;
}

/**
 * Applies the motion speed multiplier to the standard MUI transition durations.
 */
function buildTransitions(speed: ThemePreset['motion']) {
  const m = motionSpeed[speed].multiplier;

  return {
    duration: {
      shortest: Math.round(100 * m),
      shorter: Math.round(150 * m),
      short: Math.round(200 * m),
      standard: Math.round(300 * m),
      complex: Math.round(400 * m),
      enteringScreen: Math.round(225 * m),
      leavingScreen: Math.round(195 * m),
    },
    easing: {
      easeInOut: baseTransitions.easing.easeInOut,
      easeOut: baseTransitions.easing.easeOut,
      easeIn: baseTransitions.easing.easeIn,
      sharp: baseTransitions.easing.easeInOut,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LooseComponents = Record<string, any>;

/**
 * Shallow-merges two component override objects, with `b` taking precedence.
 */
function mergeComponents(a: LooseComponents, b: LooseComponents): LooseComponents {
  return { ...a, ...b };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Creates a complete MUI `Theme` from a preset definition and colour mode.
 *
 * @param preset - The theme preset to materialise.
 * @param mode   - `'light'` or `'dark'`.
 * @returns A fully-configured MUI `Theme` ready for `<ThemeProvider>`.
 */
export function createLexabitTheme(
  preset: ThemePreset,
  mode: 'light' | 'dark',
): Theme {
  const paletteConfig = preset.palette[mode];
  const typography = buildTypography(preset);
  const spacingFactor = getSpacingFactor(preset.density);
  const transitions = buildTransitions(preset.motion);
  const customShadows: ShadowPreset = { ...preset.shadows };

  // -------------------------------------------------------------------------
  // Phase 1 - Base theme (palette, typography, spacing, shape, transitions)
  // -------------------------------------------------------------------------

  const baseTheme = createTheme({
    palette: {
      mode,
      primary: paletteConfig.primary,
      secondary: paletteConfig.secondary,
      ...(paletteConfig.success && { success: paletteConfig.success }),
      ...(paletteConfig.warning && { warning: paletteConfig.warning }),
      ...(paletteConfig.error && { error: paletteConfig.error }),
      ...(paletteConfig.info && { info: paletteConfig.info }),
      background: paletteConfig.background,
      text: paletteConfig.text,
      divider: paletteConfig.divider,
      ...(paletteConfig.action && { action: paletteConfig.action }),
    },
    typography,
    spacing: spacingFactor,
    breakpoints: { values: baseBreakpoints },
    shape: { borderRadius: preset.shape.borderRadius },
    transitions,
    customShadows,
    lexabit: {
      presetId: preset.id,
      roleColors: { ...roleColors },
      sourceColors: { ...sourceColors },
    },
  });

  // -------------------------------------------------------------------------
  // Phase 2 - Component overrides (need the resolved base theme)
  // -------------------------------------------------------------------------

  const baseOverrides = sharedComponentOverrides(baseTheme) as LooseComponents;
  const raOverrides = raComponentOverrides(baseTheme) as LooseComponents;
  const presetOverrides = preset.componentOverrides
    ? (preset.componentOverrides(baseTheme) as LooseComponents)
    : {};
  const allOverrides = mergeComponents(
    mergeComponents(baseOverrides, raOverrides),
    presetOverrides,
  );

  return createTheme(baseTheme, {
    components: allOverrides,
  });
}
