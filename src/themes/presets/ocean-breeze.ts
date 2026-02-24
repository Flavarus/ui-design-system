/**
 * Ocean Breeze — teal, light, airy.
 *
 * Calm and refreshing. Clear waters. Tranquil.
 * Teal primary (#00897B), light cyan secondary (#4DD0E1),
 * lighter font weights, soft rounded corners (10px),
 * comfortable spacing, subtle shadows, relaxed motion.
 */

import type { ThemePreset } from '../types';

export const oceanBreeze: ThemePreset = {
  id: 'ocean-breeze',
  name: 'themes.oceanBreeze.name',
  description: 'themes.oceanBreeze.description',
  palette: {
    light: {
      primary: { main: '#00897B', dark: '#00695C', light: '#E0F2F1', contrastText: '#FFFFFF' },
      secondary: { main: '#4DD0E1', dark: '#00ACC1', light: '#E0F7FA', contrastText: '#000000' },
      success: { main: '#66BB6A', dark: '#43A047', light: '#E8F5E9', contrastText: '#FFFFFF' },
      warning: { main: '#FFB74D', dark: '#FFA726', light: '#FFF3E0', contrastText: '#000000' },
      error: { main: '#EF5350', dark: '#E53935', light: '#FFEBEE', contrastText: '#FFFFFF' },
      info: { main: '#29B6F6', dark: '#0288D1', light: '#E1F5FE', contrastText: '#FFFFFF' },
      background: { default: '#F0F9F8', paper: '#FFFFFF' },
      text: { primary: '#1A2E2D', secondary: '#4A6462', disabled: '#90ABA8' },
      divider: '#C8E0DE',
      action: {
        active: '#00897B',
        hover: 'rgba(0,137,123,0.06)',
        selected: 'rgba(0,137,123,0.10)',
        disabled: '#B0C8C6',
        disabledBackground: '#E8F4F2',
      },
    },
    dark: {
      primary: { main: '#26A69A', dark: '#00897B', light: '#0E2420', contrastText: '#FFFFFF' },
      secondary: { main: '#4DD0E1', dark: '#26C6DA', light: '#0E2228', contrastText: '#000000' },
      success: { main: '#66BB6A', dark: '#43A047', light: '#12201A', contrastText: '#FFFFFF' },
      warning: { main: '#FFB74D', dark: '#FFA726', light: '#201A0E', contrastText: '#000000' },
      error: { main: '#EF5350', dark: '#E53935', light: '#201212', contrastText: '#FFFFFF' },
      info: { main: '#4FC3F7', dark: '#29B6F6', light: '#0E1C24', contrastText: '#FFFFFF' },
      background: { default: '#0A1514', paper: '#12201F' },
      text: { primary: '#D0E8E6', secondary: '#8AABA8', disabled: '#4A6462' },
      divider: '#1A2E2D',
      action: {
        active: '#26A69A',
        hover: 'rgba(38,166,154,0.10)',
        selected: 'rgba(38,166,154,0.16)',
        disabled: '#4A6462',
        disabledBackground: '#1A2E2D',
      },
    },
  },
  typography: {
    h1: { fontWeight: 400 },
    h2: { fontWeight: 400 },
    h3: { fontWeight: 400 },
    h4: { fontWeight: 400 },
    h5: { fontWeight: 400 },
    h6: { fontWeight: 400 },
    body1: { fontWeight: 300 },
    body2: { fontWeight: 300 },
  },
  shape: { borderRadius: 10 },
  density: 'comfortable',
  shadows: {
    card: '0 1px 4px rgba(0,0,0,0.06)',
    cardHover: '0 2px 8px rgba(0,0,0,0.1)',
    dropdown: '0 2px 12px rgba(0,0,0,0.08)',
    modal: '0 4px 16px rgba(0,0,0,0.14)',
  },
  motion: 'relaxed',
};
