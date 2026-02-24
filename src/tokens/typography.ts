/**
 * Typography tokens for the Manda design system.
 *
 * Primary typeface: Inter
 * Monospace: JetBrains Mono
 * Serif (warm-earth preset): Playfair Display
 */

import type { TypographyOptions } from '@mui/material/styles/createTypography';

// ---------------------------------------------------------------------------
// Font Families
// ---------------------------------------------------------------------------

export const fontFamilies = {
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
  serif: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
} as const;

// ---------------------------------------------------------------------------
// Font Sizes
// ---------------------------------------------------------------------------

export const fontSizes = {
  xs: '0.6875rem',   // 11px
  sm: '0.75rem',     // 12px
  base: '0.875rem',  // 14px
  lg: '1rem',        // 16px
  xl: '1.125rem',    // 18px
  '2xl': '1.25rem',  // 20px
  '3xl': '1.5rem',   // 24px
  '4xl': '1.75rem',  // 28px
  '5xl': '2rem',     // 32px
} as const;

// ---------------------------------------------------------------------------
// Font Weights
// ---------------------------------------------------------------------------

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

// ---------------------------------------------------------------------------
// Line Heights
// ---------------------------------------------------------------------------

export const lineHeights = {
  tight: '1rem',       // 16px
  snug: '1.25rem',     // 20px
  normal: '1.5rem',    // 24px
  relaxed: '1.75rem',  // 28px
  loose: '2rem',       // 32px
  '2xl': '2.25rem',    // 36px
  '3xl': '2.5rem',     // 40px
} as const;

// ---------------------------------------------------------------------------
// Base Typography (MUI TypographyOptions)
//
// All 11 standard MUI variants with responsive overrides where applicable.
// Values are taken from the admin theme typography, with textTransform: 'none'
// preserved on the button variant.
// ---------------------------------------------------------------------------

export const baseTypography: TypographyOptions = {
  fontFamily: fontFamilies.primary,

  // Font weights
  fontWeightLight: fontWeights.light,
  fontWeightRegular: fontWeights.regular,
  fontWeightMedium: fontWeights.medium,
  fontWeightBold: fontWeights.semibold,

  // Display & Headers
  h1: {
    fontSize: '2rem',       // 32px
    lineHeight: '2.5rem',   // 40px
    fontWeight: 600,
    letterSpacing: '-0.02em',
    '@media (max-width:767px)': {
      fontSize: '1.75rem',    // 28px
      lineHeight: '2.25rem',  // 36px
    },
  },
  h2: {
    fontSize: '1.75rem',    // 28px
    lineHeight: '2.25rem',  // 36px
    fontWeight: 600,
    letterSpacing: '-0.01em',
    '@media (max-width:767px)': {
      fontSize: '1.5rem',   // 24px
      lineHeight: '2rem',   // 32px
    },
  },
  h3: {
    fontSize: '1.5rem',     // 24px
    lineHeight: '2rem',     // 32px
    fontWeight: 500,
    letterSpacing: '0em',
    '@media (max-width:767px)': {
      fontSize: '1.25rem',    // 20px
      lineHeight: '1.75rem',  // 28px
    },
  },
  h4: {
    fontSize: '1.25rem',    // 20px
    lineHeight: '1.75rem',  // 28px
    fontWeight: 500,
    letterSpacing: '0em',
    '@media (max-width:767px)': {
      fontSize: '1.125rem',   // 18px
      lineHeight: '1.625rem', // 26px
    },
  },
  h5: {
    fontSize: '1.125rem',   // 18px
    lineHeight: '1.625rem', // 26px
    fontWeight: 500,
    letterSpacing: '0em',
    '@media (max-width:767px)': {
      fontSize: '1rem',     // 16px
      lineHeight: '1.5rem', // 24px
    },
  },
  h6: {
    fontSize: '1rem',       // 16px
    lineHeight: '1.5rem',   // 24px
    fontWeight: 500,
    letterSpacing: '0em',
  },

  // Body text
  body1: {
    fontSize: '1rem',       // 16px
    lineHeight: '1.5rem',   // 24px
    fontWeight: 400,
    letterSpacing: '0em',
  },
  body2: {
    fontSize: '0.875rem',   // 14px
    lineHeight: '1.25rem',  // 20px
    fontWeight: 400,
    letterSpacing: '0em',
  },

  // Specialized text
  subtitle1: {
    fontSize: '1rem',       // 16px
    lineHeight: '1.5rem',   // 24px
    fontWeight: 500,
    letterSpacing: '0em',
  },
  subtitle2: {
    fontSize: '0.875rem',   // 14px
    lineHeight: '1.25rem',  // 20px
    fontWeight: 500,
    letterSpacing: '0em',
  },
  caption: {
    fontSize: '0.6875rem',  // 11px
    lineHeight: '1rem',     // 16px
    fontWeight: 400,
    letterSpacing: '0.03em',
  },
  overline: {
    fontSize: '0.75rem',    // 12px
    lineHeight: '1rem',     // 16px
    fontWeight: 500,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  },
  button: {
    fontSize: '0.875rem',   // 14px
    lineHeight: '1.25rem',  // 20px
    fontWeight: 500,
    letterSpacing: '0.02em',
    textTransform: 'none' as const,
  },
};
