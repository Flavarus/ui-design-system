import { createContext } from 'react';
import type { ThemePresetContextValue } from '../themes/types';

export const ThemePresetContext = createContext<ThemePresetContextValue | null>(null);
