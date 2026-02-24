/**
 * Shadow / elevation tokens for the Manda design system.
 *
 * Three preset levels control the overall shadow intensity across themes:
 *   - subtle:   lighter shadows for calm / minimal themes
 *   - medium:   standard shadows (matches the admin theme defaults)
 *   - dramatic: heavier, darker shadows for bold themes
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ShadowSet {
  readonly card: string;
  readonly cardHover: string;
  readonly dropdown: string;
  readonly modal: string;
}

// ---------------------------------------------------------------------------
// Shadow Presets
// ---------------------------------------------------------------------------

export const shadowPresets = {
  subtle: {
    card: '0 1px 4px rgba(0,0,0,0.06)',
    cardHover: '0 2px 8px rgba(0,0,0,0.08)',
    dropdown: '0 2px 10px rgba(0,0,0,0.07)',
    modal: '0 4px 16px rgba(0,0,0,0.1)',
  },
  medium: {
    card: '0 2px 8px rgba(0,0,0,0.1)',
    cardHover: '0 4px 12px rgba(0,0,0,0.15)',
    dropdown: '0 4px 16px rgba(0,0,0,0.12)',
    modal: '0 8px 24px rgba(0,0,0,0.2)',
  },
  dramatic: {
    card: '0 4px 12px rgba(0,0,0,0.16)',
    cardHover: '0 8px 20px rgba(0,0,0,0.22)',
    dropdown: '0 8px 24px rgba(0,0,0,0.2)',
    modal: '0 16px 40px rgba(0,0,0,0.3)',
  },
} as const satisfies Record<string, ShadowSet>;
