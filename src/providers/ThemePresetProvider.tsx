import { useState, useMemo, useCallback, type ReactNode } from 'react';
import type { ThemePreset } from '../themes/types';
import { createLexabitTheme } from '../themes/createLexabitTheme';
import { ThemePresetContext } from './ThemePresetContext';
import { loadPresetId, savePresetId, loadMode, saveMode } from '../utils/theme-storage';

interface ThemePresetProviderProps {
  presets: ThemePreset[];
  defaultPresetId: string;
  children: ReactNode;
}

export function ThemePresetProvider({ presets, defaultPresetId, children }: ThemePresetProviderProps) {
  // Initialize from storage or defaults
  const [presetId, setPresetIdState] = useState(() => {
    const stored = loadPresetId();
    return presets.some(p => p.id === stored) ? stored! : defaultPresetId;
  });

  const [mode, setModeState] = useState<'light' | 'dark'>(() => {
    const stored = loadMode();
    if (stored) return stored;
    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const currentPreset = useMemo(
    () => presets.find(p => p.id === presetId) || presets[0],
    [presets, presetId],
  );

  const theme = useMemo(() => createLexabitTheme(currentPreset, 'light'), [currentPreset]);
  const darkTheme = useMemo(() => createLexabitTheme(currentPreset, 'dark'), [currentPreset]);

  const setPreset = useCallback((id: string) => {
    setPresetIdState(id);
    savePresetId(id);
  }, []);

  const setMode = useCallback((m: 'light' | 'dark') => {
    setModeState(m);
    saveMode(m);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      saveMode(next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({
    presetId,
    mode,
    setPreset,
    setMode,
    toggleMode,
    theme,
    darkTheme,
    availablePresets: presets,
    currentPreset,
  }), [presetId, mode, setPreset, setMode, toggleMode, theme, darkTheme, presets, currentPreset]);

  return (
    <ThemePresetContext.Provider value={value}>
      {children}
    </ThemePresetContext.Provider>
  );
}
