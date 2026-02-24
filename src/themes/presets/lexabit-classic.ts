/**
 * Lexabit Classic — the original portal theme.
 *
 * Preserves the look of the portal before the design system was introduced:
 * colored primary AppBar, white secondary, simple MUI defaults, minimal
 * component overrides. Users who prefer the familiar look can select this.
 */

import type { Theme, Components } from '@mui/material/styles';
import type { ThemePreset } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LooseComponents = Record<string, any>;

/**
 * Component overrides that restore the original portal styling.
 * These take precedence over the shared overrides via the preset merge.
 */
const classicOverrides = (theme: Theme): LooseComponents => ({
  // Colored AppBar — the original blue header with white text
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.primary.main,
        color: '#FFFFFF',
        boxShadow: 'none',
        borderBottom: 'none',
      },
    },
  },

  // Simple white sidebar with a light border (no shadow)
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: '1px solid #dcdcdc',
        boxShadow: 'none',
      },
      root: {
        '&.RaSidebar-docked': {
          backgroundColor: 'white',
          borderRight: '1px solid #dcdcdc',
        },
      },
    },
  },

  // Simpler card — no hover shadow transition
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        boxShadow: theme.customShadows.card,
        border: `1px solid ${theme.palette.divider}`,
      },
    },
  },

  // Dialog with default MUI border radius
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 4,
        boxShadow: theme.customShadows.modal,
      },
    },
  },

  // Tabs — restore MUI default uppercase
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'uppercase' as const,
        letterSpacing: '0.02857em',
      },
    },
  },

  // Buttons — restore MUI default uppercase (overrides shared textTransform: 'none')
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'uppercase' as const,
      },
    },
  },

  // Table head — restore bold weight and original background
  MuiTableHead: {
    styleOverrides: {
      root: {
        '& .MuiTableCell-head': {
          fontWeight: 700,
          backgroundColor: '#f0f0f0',
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
      },
    },
  },
});

export const lexabitClassic: ThemePreset = {
  id: 'lexabit-classic',
  name: 'themes.lexabitClassic.name',
  description: 'themes.lexabitClassic.description',
  palette: {
    light: {
      primary: { main: '#3054E7', dark: '#2240B8', light: '#EBF0FD', contrastText: '#FFFFFF' },
      secondary: { main: '#FFFFFF', dark: '#F5F5F5', light: '#FFFFFF', contrastText: '#3054E7' },
      background: { default: '#F9FAFB', paper: '#FFFFFF' },
      text: { primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.6)', disabled: 'rgba(0, 0, 0, 0.38)' },
      divider: 'rgba(0, 0, 0, 0.12)',
    },
    dark: {
      primary: { main: '#5B7BF5', dark: '#3054E7', light: '#1E2A4A', contrastText: '#FFFFFF' },
      secondary: { main: '#E0E0E0', dark: '#BDBDBD', light: '#2A2A2A', contrastText: '#212121' },
      background: { default: '#121212', paper: '#1E1E1E' },
      text: { primary: '#FAFAFA', secondary: '#F5F5F5', disabled: '#9E9E9E' },
      divider: '#424242',
    },
  },
  // Typography: restore MUI defaults (Roboto, larger headings, uppercase buttons)
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontSize: '2.125rem', lineHeight: 1.235, fontWeight: 400, letterSpacing: '0.00735em' },
    h6: { fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 500, letterSpacing: '0.0075em' },
    button: { textTransform: 'uppercase' as const, letterSpacing: '0.02857em' },
  },
  shape: { borderRadius: 4 },
  density: 'default',
  shadows: {
    card: '0 2px 8px rgba(0,0,0,0.1)',
    cardHover: '0 4px 12px rgba(0,0,0,0.15)',
    dropdown: '0 4px 16px rgba(0,0,0,0.12)',
    modal: '0 8px 24px rgba(0,0,0,0.2)',
  },
  motion: 'default',
  componentOverrides: classicOverrides,
};
