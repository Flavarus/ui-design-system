/**
 * Spacing tokens for the Manda design system.
 *
 * Based on an 8px grid system. The MUI spacing factor is 8,
 * so `theme.spacing(1)` equals 8px.
 */

// ---------------------------------------------------------------------------
// Spacing Scale (named tokens)
// ---------------------------------------------------------------------------

export const spacingScale = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

// ---------------------------------------------------------------------------
// Base Spacing Factor
// ---------------------------------------------------------------------------

/** The MUI spacing factor in pixels. `theme.spacing(n)` = n * baseSpacing. */
export const baseSpacing = 8 as const;

// ---------------------------------------------------------------------------
// Density Configuration
// ---------------------------------------------------------------------------

export interface DensityConfig {
  /** Human-readable label for the density mode. */
  readonly label: string;
  /** Multiplier applied to the base spacing factor. */
  readonly multiplier: number;
  /** Effective spacing unit in pixels (baseSpacing * multiplier). */
  readonly unit: number;
}

export const densityConfig = {
  compact: {
    label: 'Compact',
    multiplier: 0.75,
    unit: 6,
  },
  default: {
    label: 'Default',
    multiplier: 1,
    unit: 8,
  },
  comfortable: {
    label: 'Comfortable',
    multiplier: 1.25,
    unit: 10,
  },
} as const satisfies Record<string, DensityConfig>;
