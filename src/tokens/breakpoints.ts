/**
 * Breakpoint tokens for the Manda design system.
 *
 * `baseBreakpoints` align with MUI's default breakpoint keys (xs-xl) so they
 * can be passed directly to `createTheme({ breakpoints: { values } })`.
 *
 * `customBreakpoints` provide additional, human-friendly reference points for
 * use in custom media queries and responsive utilities.
 */

// ---------------------------------------------------------------------------
// MUI-Compatible Breakpoints (values in pixels)
// ---------------------------------------------------------------------------

export const baseBreakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

// ---------------------------------------------------------------------------
// Custom / Supplementary Breakpoints
// ---------------------------------------------------------------------------

export const customBreakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;
