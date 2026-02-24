const STORAGE_KEY_PRESET = 'lexabit-theme-preset';
const STORAGE_KEY_MODE = 'lexabit-theme-mode';

export function loadPresetId(): string | null {
  try { return localStorage.getItem(STORAGE_KEY_PRESET); } catch { return null; }
}

export function savePresetId(id: string): void {
  try { localStorage.setItem(STORAGE_KEY_PRESET, id); } catch { /* noop */ }
}

export function loadMode(): 'light' | 'dark' | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY_MODE);
    return v === 'light' || v === 'dark' ? v : null;
  } catch { return null; }
}

export function saveMode(mode: 'light' | 'dark'): void {
  try { localStorage.setItem(STORAGE_KEY_MODE, mode); } catch { /* noop */ }
}
