/**
 * Nordic Frost — cool, sharp, compact.
 *
 * Scandinavian minimalism. Ice and steel. Efficient and precise.
 * Cool gray-blue primary (#546E7A), ice blue secondary (#B0BEC5),
 * very sharp corners (2px), compact spacing, subtle shadows, fast motion.
 */

import type { ThemePreset } from '../types';

export const nordicFrost: ThemePreset = {
  id: 'nordic-frost',
  name: 'themes.nordicFrost.name',
  description: 'themes.nordicFrost.description',
  palette: {
    light: {
      primary: { main: '#546E7A', dark: '#37474F', light: '#ECEFF1', contrastText: '#FFFFFF' },
      secondary: { main: '#B0BEC5', dark: '#78909C', light: '#F5F7F8', contrastText: '#263238' },
      success: { main: '#66BB6A', dark: '#43A047', light: '#E8F5E9', contrastText: '#FFFFFF' },
      warning: { main: '#FFA726', dark: '#FB8C00', light: '#FFF3E0', contrastText: '#000000' },
      error: { main: '#EF5350', dark: '#E53935', light: '#FFEBEE', contrastText: '#FFFFFF' },
      info: { main: '#42A5F5', dark: '#1E88E5', light: '#E3F2FD', contrastText: '#FFFFFF' },
      background: { default: '#F5F7FA', paper: '#FFFFFF' },
      text: { primary: '#1C2B33', secondary: '#4A5E6A', disabled: '#90A4AE' },
      divider: '#CFD8DC',
      action: {
        active: '#546E7A',
        hover: 'rgba(84,110,122,0.06)',
        selected: 'rgba(84,110,122,0.10)',
        disabled: '#B0BEC5',
        disabledBackground: '#ECEFF1',
      },
    },
    dark: {
      primary: { main: '#78909C', dark: '#546E7A', light: '#1A2530', contrastText: '#FFFFFF' },
      secondary: { main: '#B0BEC5', dark: '#90A4AE', light: '#1E2A30', contrastText: '#0D1117' },
      success: { main: '#66BB6A', dark: '#43A047', light: '#1B2E1C', contrastText: '#FFFFFF' },
      warning: { main: '#FFA726', dark: '#FB8C00', light: '#2E2214', contrastText: '#000000' },
      error: { main: '#EF5350', dark: '#E53935', light: '#2E1616', contrastText: '#FFFFFF' },
      info: { main: '#42A5F5', dark: '#1E88E5', light: '#14202E', contrastText: '#FFFFFF' },
      background: { default: '#0D1117', paper: '#161B22' },
      text: { primary: '#C9D1D9', secondary: '#8B949E', disabled: '#484F58' },
      divider: '#21262D',
      action: {
        active: '#78909C',
        hover: 'rgba(120,144,156,0.08)',
        selected: 'rgba(120,144,156,0.14)',
        disabled: '#484F58',
        disabledBackground: '#21262D',
      },
    },
  },
  shape: { borderRadius: 2 },
  density: 'compact',
  shadows: {
    card: '0 1px 4px rgba(0,0,0,0.06)',
    cardHover: '0 2px 8px rgba(0,0,0,0.1)',
    dropdown: '0 2px 12px rgba(0,0,0,0.08)',
    modal: '0 4px 16px rgba(0,0,0,0.14)',
  },
  motion: 'fast',
};
