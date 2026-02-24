/**
 * Theme barrel export for @manda/ui-design-system.
 *
 * Re-exports the theme factory, all type definitions, and every registered
 * preset so consumers can do:
 *
 *   import {
 *     createLexabitTheme,
 *     allPresets,
 *     lexabitProfessional,
 *     nordicFrost,
 *     midnightFocus,
 *     warmEarth,
 *     oceanBreeze,
 *     lexabitClassic,
 *     playfulVivid,
 *     type ThemePreset,
 *   } from '@manda/ui-design-system';
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type {
  ShadowIntensity,
  SpacingDensity,
  MotionSpeed,
  ShadowPreset,
  PresetPaletteConfig,
  ThemePreset,
  ThemePresetContextValue,
} from './types';

// ---------------------------------------------------------------------------
// Theme factory
// ---------------------------------------------------------------------------

export { createLexabitTheme } from './createLexabitTheme';

// ---------------------------------------------------------------------------
// Presets
// ---------------------------------------------------------------------------

export {
  lexabitProfessional,
  nordicFrost,
  midnightFocus,
  warmEarth,
  oceanBreeze,
  lexabitClassic,
  playfulVivid,
} from './presets';

// ---------------------------------------------------------------------------
// Preset registry
// ---------------------------------------------------------------------------

import {
  lexabitProfessional,
  nordicFrost,
  midnightFocus,
  warmEarth,
  oceanBreeze,
  lexabitClassic,
  playfulVivid,
} from './presets';
import type { ThemePreset } from './types';

/**
 * All registered theme presets.
 *
 * When new presets are added, import and append them here so that
 * `ThemePresetProvider` can enumerate them without manual wiring.
 */
export const allPresets: ThemePreset[] = [
  lexabitProfessional,
  lexabitClassic,
  nordicFrost,
  midnightFocus,
  warmEarth,
  oceanBreeze,
  playfulVivid,
];
