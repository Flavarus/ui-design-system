/**
 * Design token barrel export for @manda/ui-design-system.
 *
 * Re-exports every token module so consumers can do:
 *   import { brandColors, baseTypography, ... } from '@manda/ui-design-system/tokens';
 * or import individually from deeper paths.
 */

// Colors
export {
  brandColors,
  semanticColors,
  neutralColors,
  roleColors,
  sourceColors,
} from './colors';

// Typography
export {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  baseTypography,
} from './typography';

// Spacing
export {
  spacingScale,
  baseSpacing,
  densityConfig,
} from './spacing';
export type { DensityConfig } from './spacing';

// Shadows
export { shadowPresets } from './shadows';
export type { ShadowSet } from './shadows';

// Borders
export { borderRadiusScale } from './borders';

// Motion
export {
  motionSpeed,
  baseTransitions,
} from './motion';
export type { MotionSpeedConfig } from './motion';

// Breakpoints
export {
  baseBreakpoints,
  customBreakpoints,
} from './breakpoints';
