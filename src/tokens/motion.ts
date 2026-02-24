/**
 * Motion / animation tokens for the Manda design system.
 *
 * Speed configs (fast / default / relaxed) act as multipliers on the base
 * transition durations, allowing themes to feel snappy or laid-back without
 * re-defining every animation individually.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface MotionSpeedConfig {
  readonly label: string;
  /** Multiplier applied to all base durations. */
  readonly multiplier: number;
}

// ---------------------------------------------------------------------------
// Motion Speed Presets
// ---------------------------------------------------------------------------

export const motionSpeed = {
  fast: {
    label: 'Fast',
    multiplier: 0.6,
  },
  default: {
    label: 'Default',
    multiplier: 1,
  },
  relaxed: {
    label: 'Relaxed',
    multiplier: 1.5,
  },
} as const satisfies Record<string, MotionSpeedConfig>;

// ---------------------------------------------------------------------------
// Base Transitions
// ---------------------------------------------------------------------------

export const baseTransitions = {
  /** Duration values in milliseconds. */
  duration: {
    fast: 100,
    normal: 150,
    slow: 200,
    slower: 300,
  },

  /** Easing curves in CSS cubic-bezier notation (matches MUI conventions). */
  easing: {
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.6, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;
