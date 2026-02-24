/**
 * Playful Vivid — glassmorphism, indigo, vibrant.
 *
 * Vibrant and modern. Frosted glass aesthetic with layered depth.
 * Indigo 500 primary (#6366F1), Indigo 400 secondary (#818CF8),
 * Plus Jakarta Sans font, soft rounded corners (10px),
 * default spacing, diffused indigo-tinted shadows, default motion.
 *
 * Best for: Users who want a vibrant, modern, playful interface.
 */

import type { Theme, Components } from '@mui/material/styles';
import type { ThemePreset } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LooseComponents = Record<string, any>;

/**
 * Glassmorphism component overrides specific to the Playful Vivid preset.
 * Base component styling is handled in shared overrides.ts — these overrides
 * layer the frosted glass aesthetic on top.
 */
const playfulVividOverrides = (theme: Theme): LooseComponents => ({
  // MuiCard — semi-transparent with backdrop blur and indigo-tinted border
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(30, 27, 75, 0.55)'
            : 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: `1px solid ${
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.10)'
            : 'rgba(255, 255, 255, 0.45)'
        }`,
        boxShadow: theme.customShadows.card,
      },
    },
  },

  // MuiDialog — glass modal with blurred backdrop
  MuiDialog: {
    styleOverrides: {
      paper: {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(30, 27, 75, 0.80)'
            : 'rgba(255, 255, 255, 0.80)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.10)'
            : 'rgba(255, 255, 255, 0.50)'
        }`,
        boxShadow: theme.customShadows.modal,
      },
    },
  },

  // MuiAppBar — translucent frosted glass top bar
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(17, 15, 50, 0.75)'
            : 'rgba(245, 243, 255, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(99, 102, 241, 0.15)'
        }`,
        boxShadow: 'none',
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.text.primary
            : theme.palette.text.primary,
      },
    },
  },
});

export const playfulVivid: ThemePreset = {
  id: 'playful-vivid',
  name: 'themes.playfulVivid.name',
  description: 'themes.playfulVivid.description',
  palette: {
    light: {
      primary: { main: '#6366F1', dark: '#4F46E5', light: '#EEF2FF', contrastText: '#FFFFFF' },
      secondary: { main: '#818CF8', dark: '#6366F1', light: '#EEF2FF', contrastText: '#FFFFFF' },
      success: { main: '#10B981', dark: '#059669', light: '#D1FAE5', contrastText: '#FFFFFF' },
      warning: { main: '#F59E0B', dark: '#D97706', light: '#FEF3C7', contrastText: '#000000' },
      error: { main: '#EF4444', dark: '#DC2626', light: '#FEE2E2', contrastText: '#FFFFFF' },
      info: { main: '#6366F1', dark: '#4F46E5', light: '#EEF2FF', contrastText: '#FFFFFF' },
      background: { default: '#F5F3FF', paper: '#FFFFFF' },
      text: { primary: '#1E1B4B', secondary: '#4C4980', disabled: '#9896B8' },
      divider: '#DDD6FE',
      action: {
        active: '#6366F1',
        hover: 'rgba(99,102,241,0.06)',
        selected: 'rgba(99,102,241,0.10)',
        disabled: '#B0AED8',
        disabledBackground: '#EEF2FF',
      },
    },
    dark: {
      primary: { main: '#818CF8', dark: '#6366F1', light: '#1E1B4B', contrastText: '#FFFFFF' },
      secondary: { main: '#A5B4FC', dark: '#818CF8', light: '#1A1844', contrastText: '#FFFFFF' },
      success: { main: '#34D399', dark: '#10B981', light: '#0E2E22', contrastText: '#000000' },
      warning: { main: '#FCD34D', dark: '#F59E0B', light: '#2A200A', contrastText: '#000000' },
      error: { main: '#F87171', dark: '#EF4444', light: '#2A1010', contrastText: '#FFFFFF' },
      info: { main: '#818CF8', dark: '#6366F1', light: '#18163A', contrastText: '#FFFFFF' },
      background: { default: '#0D0B1E', paper: '#17143A' },
      text: { primary: '#EDE9FE', secondary: '#A5A1D0', disabled: '#5A5878' },
      divider: '#2D2A5A',
      action: {
        active: '#818CF8',
        hover: 'rgba(129,140,248,0.10)',
        selected: 'rgba(129,140,248,0.16)',
        disabled: '#5A5878',
        disabledBackground: '#1E1B4B',
      },
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
  shape: { borderRadius: 10 },
  density: 'default',
  // Diffused, indigo-tinted shadows — softer and more colourful than Professional
  shadows: {
    card: '0 2px 12px rgba(99,102,241,0.10), 0 1px 4px rgba(0,0,0,0.06)',
    cardHover: '0 6px 20px rgba(99,102,241,0.16), 0 2px 8px rgba(0,0,0,0.08)',
    dropdown: '0 4px 16px rgba(99,102,241,0.14), 0 2px 6px rgba(0,0,0,0.08)',
    modal: '0 8px 32px rgba(99,102,241,0.18), 0 4px 12px rgba(0,0,0,0.12)',
  },
  motion: 'default',
  componentOverrides: playfulVividOverrides,
};
