/**
 * Midnight Focus — dark-first, deep, spacious.
 *
 * Deep focus mode. Elegant and immersive. For late-night work.
 * Deep indigo primary (#5C6BC0), soft purple secondary (#9575CD),
 * slightly more rounded (8px), comfortable spacing, dramatic shadows,
 * relaxed motion.
 */

import type { ThemePreset } from '../types';

export const midnightFocus: ThemePreset = {
  id: 'midnight-focus',
  name: 'themes.midnightFocus.name',
  description: 'themes.midnightFocus.description',
  palette: {
    light: {
      primary: { main: '#5C6BC0', dark: '#3F51B5', light: '#E8EAF6', contrastText: '#FFFFFF' },
      secondary: { main: '#9575CD', dark: '#7E57C2', light: '#EDE7F6', contrastText: '#FFFFFF' },
      success: { main: '#66BB6A', dark: '#43A047', light: '#E8F5E9', contrastText: '#FFFFFF' },
      warning: { main: '#FFCA28', dark: '#FFB300', light: '#FFF8E1', contrastText: '#000000' },
      error: { main: '#EF5350', dark: '#E53935', light: '#FFEBEE', contrastText: '#FFFFFF' },
      info: { main: '#5C6BC0', dark: '#3F51B5', light: '#E8EAF6', contrastText: '#FFFFFF' },
      background: { default: '#F5F5FA', paper: '#FFFFFF' },
      text: { primary: '#1A1A2E', secondary: '#4A4A68', disabled: '#9E9EB8' },
      divider: '#D8D8E8',
      action: {
        active: '#5C6BC0',
        hover: 'rgba(92,107,192,0.06)',
        selected: 'rgba(92,107,192,0.10)',
        disabled: '#B0B0C8',
        disabledBackground: '#E8E8F0',
      },
    },
    dark: {
      primary: { main: '#7986CB', dark: '#5C6BC0', light: '#1A1D3A', contrastText: '#FFFFFF' },
      secondary: { main: '#B39DDB', dark: '#9575CD', light: '#1E1830', contrastText: '#FFFFFF' },
      success: { main: '#81C784', dark: '#66BB6A', light: '#12201A', contrastText: '#FFFFFF' },
      warning: { main: '#FFD54F', dark: '#FFCA28', light: '#201A0A', contrastText: '#000000' },
      error: { main: '#E57373', dark: '#EF5350', light: '#201214', contrastText: '#FFFFFF' },
      info: { main: '#7986CB', dark: '#5C6BC0', light: '#14162A', contrastText: '#FFFFFF' },
      background: { default: '#0A0A14', paper: '#12121E' },
      text: { primary: '#E0E0F0', secondary: '#A0A0C0', disabled: '#505068' },
      divider: '#1E1E30',
      action: {
        active: '#7986CB',
        hover: 'rgba(121,134,203,0.10)',
        selected: 'rgba(121,134,203,0.16)',
        disabled: '#505068',
        disabledBackground: '#1E1E30',
      },
    },
  },
  shape: { borderRadius: 8 },
  density: 'comfortable',
  shadows: {
    card: '0 4px 12px rgba(0,0,0,0.2)',
    cardHover: '0 8px 20px rgba(0,0,0,0.28)',
    dropdown: '0 6px 24px rgba(0,0,0,0.25)',
    modal: '0 12px 40px rgba(0,0,0,0.35)',
  },
  motion: 'relaxed',
};
