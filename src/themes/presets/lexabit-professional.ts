/**
 * Lexabit Professional — the default brand theme.
 *
 * Brand blue (#3054E7), Inter font, rounded corners (6px), medium shadows.
 * This is the canonical Lexabit look: professional, trustworthy, clean.
 */

import type { ThemePreset } from '../types';

export const lexabitProfessional: ThemePreset = {
  id: 'lexabit-professional',
  name: 'themes.lexabitProfessional.name',
  description: 'themes.lexabitProfessional.description',
  palette: {
    light: {
      primary: { main: '#3054E7', dark: '#2240B8', light: '#EBF0FD', contrastText: '#FFFFFF' },
      secondary: { main: '#5C6BC0', dark: '#3F51B5', light: '#E8EAF6', contrastText: '#FFFFFF' },
      background: { default: '#F8F9FC', paper: '#FFFFFF' },
      text: { primary: '#1A1A2E', secondary: '#4A4A68', disabled: '#9E9E9E' },
      divider: '#E0E0E0',
    },
    dark: {
      primary: { main: '#5B7BF5', dark: '#3054E7', light: '#1E2A4A', contrastText: '#FFFFFF' },
      secondary: { main: '#7986CB', dark: '#5C6BC0', light: '#1A1F3A', contrastText: '#FFFFFF' },
      background: { default: '#0F1117', paper: '#1A1D2E' },
      text: { primary: '#E8E8F0', secondary: '#A0A0B8', disabled: '#606078' },
      divider: '#2A2D3E',
    },
  },
  shape: { borderRadius: 6 },
  density: 'default',
  shadows: {
    card: '0 2px 8px rgba(0,0,0,0.1)',
    cardHover: '0 4px 12px rgba(0,0,0,0.15)',
    dropdown: '0 4px 16px rgba(0,0,0,0.12)',
    modal: '0 8px 24px rgba(0,0,0,0.2)',
  },
  motion: 'default',
};
