import { useContext } from 'react';
import { ThemePresetContext } from '../providers/ThemePresetContext';
import type { ThemePresetContextValue } from '../themes/types';

export function useThemePreset(): ThemePresetContextValue {
  const context = useContext(ThemePresetContext);
  if (!context) {
    throw new Error('useThemePreset must be used within a ThemePresetProvider');
  }
  return context;
}
