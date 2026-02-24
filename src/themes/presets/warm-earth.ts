/**
 * Warm Earth — terracotta, serif, organic.
 *
 * Warm and grounded. Natural materials. Distinguished.
 * Terracotta primary (#BF5B3D), amber secondary (#FFA726),
 * Playfair Display serif headings, large organic rounding (12px),
 * medium shadows, default motion.
 */

import type { ThemePreset } from '../types';

export const warmEarth: ThemePreset = {
  id: 'warm-earth',
  name: 'themes.warmEarth.name',
  description: 'themes.warmEarth.description',
  palette: {
    light: {
      primary: { main: '#BF5B3D', dark: '#9C4428', light: '#FBE9E3', contrastText: '#FFFFFF' },
      secondary: { main: '#FFA726', dark: '#FB8C00', light: '#FFF3E0', contrastText: '#000000' },
      success: { main: '#6D9B5A', dark: '#547A42', light: '#EDF5E8', contrastText: '#FFFFFF' },
      warning: { main: '#FFA726', dark: '#FB8C00', light: '#FFF3E0', contrastText: '#000000' },
      error: { main: '#C62828', dark: '#B71C1C', light: '#FFEBEE', contrastText: '#FFFFFF' },
      info: { main: '#5D8AA8', dark: '#456D8A', light: '#E6F0F6', contrastText: '#FFFFFF' },
      background: { default: '#FBF8F5', paper: '#FFFFFF' },
      text: { primary: '#2D1F14', secondary: '#5D4E42', disabled: '#A89888' },
      divider: '#E4DCD4',
      action: {
        active: '#BF5B3D',
        hover: 'rgba(191,91,61,0.06)',
        selected: 'rgba(191,91,61,0.10)',
        disabled: '#C8B8A8',
        disabledBackground: '#F0EBE5',
      },
    },
    dark: {
      primary: { main: '#D4775C', dark: '#BF5B3D', light: '#2E1C14', contrastText: '#FFFFFF' },
      secondary: { main: '#FFB74D', dark: '#FFA726', light: '#2E2214', contrastText: '#000000' },
      success: { main: '#81B06A', dark: '#6D9B5A', light: '#1A2416', contrastText: '#FFFFFF' },
      warning: { main: '#FFB74D', dark: '#FFA726', light: '#2E2214', contrastText: '#000000' },
      error: { main: '#EF5350', dark: '#C62828', light: '#2E1414', contrastText: '#FFFFFF' },
      info: { main: '#7AAAC4', dark: '#5D8AA8', light: '#14202A', contrastText: '#FFFFFF' },
      background: { default: '#1A1410', paper: '#241E18' },
      text: { primary: '#EDE4DA', secondary: '#B8A898', disabled: '#685848' },
      divider: '#342A22',
      action: {
        active: '#D4775C',
        hover: 'rgba(212,119,92,0.10)',
        selected: 'rgba(212,119,92,0.16)',
        disabled: '#685848',
        disabledBackground: '#342A22',
      },
    },
  },
  typography: {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  density: 'default',
  shadows: {
    card: '0 2px 8px rgba(0,0,0,0.1)',
    cardHover: '0 4px 12px rgba(0,0,0,0.15)',
    dropdown: '0 4px 16px rgba(0,0,0,0.12)',
    modal: '0 8px 24px rgba(0,0,0,0.2)',
  },
  motion: 'default',
};
