import { Components } from '@mui/material/styles';
import { Context } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { Theme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

/**
 * All registered theme presets.
 *
 * When new presets are added, import and append them here so that
 * `ThemePresetProvider` can enumerate them without manual wiring.
 */
export declare const allPresets: ThemePreset[];

/**
 * Breakpoint tokens for the Manda design system.
 *
 * `baseBreakpoints` align with MUI's default breakpoint keys (xs-xl) so they
 * can be passed directly to `createTheme({ breakpoints: { values } })`.
 *
 * `customBreakpoints` provide additional, human-friendly reference points for
 * use in custom media queries and responsive utilities.
 */
export declare const baseBreakpoints: {
    readonly xs: 0;
    readonly sm: 600;
    readonly md: 900;
    readonly lg: 1200;
    readonly xl: 1536;
};

/** The MUI spacing factor in pixels. `theme.spacing(n)` = n * baseSpacing. */
export declare const baseSpacing: 8;

export declare const baseTransitions: {
    /** Duration values in milliseconds. */
    readonly duration: {
        readonly fast: 100;
        readonly normal: 150;
        readonly slow: 200;
        readonly slower: 300;
    };
    /** Easing curves in CSS cubic-bezier notation (matches MUI conventions). */
    readonly easing: {
        readonly easeOut: "cubic-bezier(0.0, 0, 0.2, 1)";
        readonly easeInOut: "cubic-bezier(0.4, 0, 0.6, 1)";
        readonly easeIn: "cubic-bezier(0.4, 0, 1, 1)";
        readonly spring: "cubic-bezier(0.34, 1.56, 0.64, 1)";
    };
};

export declare const baseTypography: TypographyOptions;

/**
 * Border radius tokens for the Manda design system.
 *
 * Provides a consistent scale from sharp corners to fully rounded elements.
 */
export declare const borderRadiusScale: {
    readonly none: 0;
    readonly xs: 2;
    readonly sm: 4;
    readonly base: 6;
    readonly md: 8;
    readonly lg: 12;
    readonly xl: 16;
    readonly full: 9999;
};

/**
 * Brand and semantic color tokens for the Manda design system.
 *
 * Primary brand color: #3054E7 (Manda Blue)
 * All variants are derived from this base.
 */
export declare const brandColors: {
    readonly primary: {
        readonly main: "#3054E7";
        readonly dark: "#2240B8";
        readonly light: "#EBF0FD";
        readonly contrastText: "#FFFFFF";
    };
    readonly secondary: {
        readonly main: "#5C6BC0";
        readonly dark: "#3F51B5";
        readonly light: "#E8EAF6";
        readonly contrastText: "#FFFFFF";
    };
    readonly tertiary: {
        readonly main: "#7C4DFF";
        readonly dark: "#651FFF";
        readonly light: "#EDE7F6";
        readonly contrastText: "#FFFFFF";
    };
};

/**
 * Creates a complete MUI `Theme` from a preset definition and colour mode.
 *
 * @param preset - The theme preset to materialise.
 * @param mode   - `'light'` or `'dark'`.
 * @returns A fully-configured MUI `Theme` ready for `<ThemeProvider>`.
 */
export declare function createLexabitTheme(preset: ThemePreset, mode: 'light' | 'dark'): Theme;

export declare const customBreakpoints: {
    readonly mobile: 320;
    readonly tablet: 768;
    readonly desktop: 1024;
    readonly wide: 1440;
};

export declare interface DensityConfig {
    /** Human-readable label for the density mode. */
    readonly label: string;
    /** Multiplier applied to the base spacing factor. */
    readonly multiplier: number;
    /** Effective spacing unit in pixels (baseSpacing * multiplier). */
    readonly unit: number;
}

export declare const densityConfig: {
    readonly compact: {
        readonly label: "Compact";
        readonly multiplier: 0.75;
        readonly unit: 6;
    };
    readonly default: {
        readonly label: "Default";
        readonly multiplier: 1;
        readonly unit: 8;
    };
    readonly comfortable: {
        readonly label: "Comfortable";
        readonly multiplier: 1.25;
        readonly unit: 10;
    };
};

export declare const fontFamilies: {
    readonly primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    readonly mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace";
    readonly serif: "'Playfair Display', 'Georgia', 'Times New Roman', serif";
};

export declare const fontSizes: {
    readonly xs: "0.6875rem";
    readonly sm: "0.75rem";
    readonly base: "0.875rem";
    readonly lg: "1rem";
    readonly xl: "1.125rem";
    readonly '2xl': "1.25rem";
    readonly '3xl': "1.5rem";
    readonly '4xl': "1.75rem";
    readonly '5xl': "2rem";
};

export declare const fontWeights: {
    readonly light: 300;
    readonly regular: 400;
    readonly medium: 500;
    readonly semibold: 600;
    readonly bold: 700;
};

export declare const lexabitClassic: ThemePreset;

export declare const lexabitProfessional: ThemePreset;

export declare const lineHeights: {
    readonly tight: "1rem";
    readonly snug: "1.25rem";
    readonly normal: "1.5rem";
    readonly relaxed: "1.75rem";
    readonly loose: "2rem";
    readonly '2xl': "2.25rem";
    readonly '3xl': "2.5rem";
};

declare type LooseComponents = Record<string, any>;

export declare const midnightFocus: ThemePreset;

/** Animation speed multiplier. */
export declare type MotionSpeed = 'fast' | 'default' | 'relaxed';

export declare const motionSpeed: {
    readonly fast: {
        readonly label: "Fast";
        readonly multiplier: 0.6;
    };
    readonly default: {
        readonly label: "Default";
        readonly multiplier: 1;
    };
    readonly relaxed: {
        readonly label: "Relaxed";
        readonly multiplier: 1.5;
    };
};

/**
 * Motion / animation tokens for the Manda design system.
 *
 * Speed configs (fast / default / relaxed) act as multipliers on the base
 * transition durations, allowing themes to feel snappy or laid-back without
 * re-defining every animation individually.
 */
export declare interface MotionSpeedConfig {
    readonly label: string;
    /** Multiplier applied to all base durations. */
    readonly multiplier: number;
}

export declare const neutralColors: {
    readonly 50: "#FAFAFA";
    readonly 100: "#F5F5F5";
    readonly 200: "#EEEEEE";
    readonly 300: "#E0E0E0";
    readonly 400: "#BDBDBD";
    readonly 500: "#9E9E9E";
    readonly 600: "#757575";
    readonly 700: "#616161";
    readonly 800: "#424242";
    readonly 900: "#212121";
};

export declare const nordicFrost: ThemePreset;

export declare const oceanBreeze: ThemePreset;

/** Palette overrides for a single color-scheme (light or dark). */
export declare interface PresetPaletteConfig {
    primary: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
    };
    secondary: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
    };
    success?: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
    };
    warning?: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
    };
    error?: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
    };
    info?: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
    };
    background: {
        default: string;
        paper: string;
    };
    text: {
        primary: string;
        secondary: string;
        disabled: string;
    };
    divider: string;
    action?: {
        active?: string;
        hover?: string;
        selected?: string;
        disabled?: string;
        disabledBackground?: string;
    };
}

export declare const raComponentOverrides: (theme: Theme) => LooseComponents;

export declare const roleColors: {
    readonly owner: "#D32F2F";
    readonly admin: "#F57C00";
    readonly manager: "#1976D2";
    readonly member: "#388E3C";
    readonly viewer: "#616161";
    readonly billing: "#7B1FA2";
    readonly custom: "#00796B";
};

export declare const semanticColors: {
    readonly success: {
        readonly main: "#4CAF50";
        readonly dark: "#388E3C";
        readonly light: "#E8F5E9";
        readonly contrastText: "#FFFFFF";
    };
    readonly warning: {
        readonly main: "#FF9800";
        readonly dark: "#F57C00";
        readonly light: "#FFF3E0";
        readonly contrastText: "#000000";
    };
    readonly error: {
        readonly main: "#F44336";
        readonly dark: "#D32F2F";
        readonly light: "#FFEBEE";
        readonly contrastText: "#FFFFFF";
    };
    readonly info: {
        readonly main: "#2196F3";
        readonly dark: "#1976D2";
        readonly light: "#E3F2FD";
        readonly contrastText: "#FFFFFF";
    };
};

/** Shadow intensity levels controlling overall shadow darkness. */
export declare type ShadowIntensity = 'subtle' | 'medium' | 'dramatic';

/** Named shadow values used through `theme.customShadows`. */
export declare interface ShadowPreset {
    card: string;
    cardHover: string;
    dropdown: string;
    modal: string;
}

export declare const shadowPresets: {
    readonly subtle: {
        readonly card: "0 1px 4px rgba(0,0,0,0.06)";
        readonly cardHover: "0 2px 8px rgba(0,0,0,0.08)";
        readonly dropdown: "0 2px 10px rgba(0,0,0,0.07)";
        readonly modal: "0 4px 16px rgba(0,0,0,0.1)";
    };
    readonly medium: {
        readonly card: "0 2px 8px rgba(0,0,0,0.1)";
        readonly cardHover: "0 4px 12px rgba(0,0,0,0.15)";
        readonly dropdown: "0 4px 16px rgba(0,0,0,0.12)";
        readonly modal: "0 8px 24px rgba(0,0,0,0.2)";
    };
    readonly dramatic: {
        readonly card: "0 4px 12px rgba(0,0,0,0.16)";
        readonly cardHover: "0 8px 20px rgba(0,0,0,0.22)";
        readonly dropdown: "0 8px 24px rgba(0,0,0,0.2)";
        readonly modal: "0 16px 40px rgba(0,0,0,0.3)";
    };
};

/**
 * Shadow / elevation tokens for the Manda design system.
 *
 * Three preset levels control the overall shadow intensity across themes:
 *   - subtle:   lighter shadows for calm / minimal themes
 *   - medium:   standard shadows (matches the admin theme defaults)
 *   - dramatic: heavier, darker shadows for bold themes
 */
export declare interface ShadowSet {
    readonly card: string;
    readonly cardHover: string;
    readonly dropdown: string;
    readonly modal: string;
}

export declare const sharedComponentOverrides: (theme: Theme) => Components;

export declare const sourceColors: {
    readonly roleBased: "#1976D2";
    readonly directGrant: "#F57C00";
    readonly inherited: "#388E3C";
};

/** Spacing density: affects the base spacing unit. */
export declare type SpacingDensity = 'compact' | 'default' | 'comfortable';

/**
 * Spacing tokens for the Manda design system.
 *
 * Based on an 8px grid system. The MUI spacing factor is 8,
 * so `theme.spacing(1)` equals 8px.
 */
export declare const spacingScale: {
    readonly xs: 4;
    readonly sm: 8;
    readonly md: 16;
    readonly lg: 24;
    readonly xl: 32;
    readonly '2xl': 48;
    readonly '3xl': 64;
};

/** The full theme-preset definition consumed by `createLexabitTheme`. */
export declare interface ThemePreset {
    /** Unique identifier for the preset. */
    id: string;
    /** i18n key for the display name. */
    name: string;
    /** i18n key for the description. */
    description: string;
    /** Color palettes for light and dark modes. */
    palette: {
        light: PresetPaletteConfig;
        dark: PresetPaletteConfig;
    };
    /** Optional typography overrides — can set fontFamily, or override individual
     *  MUI variants (h1-h6, body1/2, button, etc.) with fontSize, fontWeight,
     *  letterSpacing, textTransform, and more. Merged on top of base typography. */
    typography?: Partial<TypographyOptions>;
    /** Border radius in pixels. */
    shape: {
        borderRadius: number;
    };
    /** Spacing density level. */
    density: SpacingDensity;
    /** Shadow configuration. */
    shadows: ShadowPreset;
    /** Animation speed. */
    motion: MotionSpeed;
    /** Optional additional component overrides specific to this preset. */
    componentOverrides?: (theme: Theme) => Components;
}

export declare const ThemePresetContext: Context<ThemePresetContextValue | null>;

/** Value exposed by the ThemePresetProvider React context. */
export declare interface ThemePresetContextValue {
    presetId: string;
    mode: 'light' | 'dark';
    setPreset: (id: string) => void;
    setMode: (mode: 'light' | 'dark') => void;
    toggleMode: () => void;
    theme: Theme;
    darkTheme: Theme;
    availablePresets: ThemePreset[];
    currentPreset: ThemePreset;
}

export declare function ThemePresetProvider({ presets, defaultPresetId, children }: ThemePresetProviderProps): JSX_2.Element;

declare interface ThemePresetProviderProps {
    presets: ThemePreset[];
    defaultPresetId: string;
    children: ReactNode;
}

export declare function useDesignTokens(): {
    readonly colors: {
        readonly brand: {
            readonly primary: {
                readonly main: "#3054E7";
                readonly dark: "#2240B8";
                readonly light: "#EBF0FD";
                readonly contrastText: "#FFFFFF";
            };
            readonly secondary: {
                readonly main: "#5C6BC0";
                readonly dark: "#3F51B5";
                readonly light: "#E8EAF6";
                readonly contrastText: "#FFFFFF";
            };
            readonly tertiary: {
                readonly main: "#7C4DFF";
                readonly dark: "#651FFF";
                readonly light: "#EDE7F6";
                readonly contrastText: "#FFFFFF";
            };
        };
        readonly semantic: {
            readonly success: {
                readonly main: "#4CAF50";
                readonly dark: "#388E3C";
                readonly light: "#E8F5E9";
                readonly contrastText: "#FFFFFF";
            };
            readonly warning: {
                readonly main: "#FF9800";
                readonly dark: "#F57C00";
                readonly light: "#FFF3E0";
                readonly contrastText: "#000000";
            };
            readonly error: {
                readonly main: "#F44336";
                readonly dark: "#D32F2F";
                readonly light: "#FFEBEE";
                readonly contrastText: "#FFFFFF";
            };
            readonly info: {
                readonly main: "#2196F3";
                readonly dark: "#1976D2";
                readonly light: "#E3F2FD";
                readonly contrastText: "#FFFFFF";
            };
        };
        readonly neutral: {
            readonly 50: "#FAFAFA";
            readonly 100: "#F5F5F5";
            readonly 200: "#EEEEEE";
            readonly 300: "#E0E0E0";
            readonly 400: "#BDBDBD";
            readonly 500: "#9E9E9E";
            readonly 600: "#757575";
            readonly 700: "#616161";
            readonly 800: "#424242";
            readonly 900: "#212121";
        };
        readonly role: {
            readonly owner: "#D32F2F";
            readonly admin: "#F57C00";
            readonly manager: "#1976D2";
            readonly member: "#388E3C";
            readonly viewer: "#616161";
            readonly billing: "#7B1FA2";
            readonly custom: "#00796B";
        };
        readonly source: {
            readonly roleBased: "#1976D2";
            readonly directGrant: "#F57C00";
            readonly inherited: "#388E3C";
        };
    };
    readonly typography: {
        readonly fontFamilies: {
            readonly primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
            readonly mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace";
            readonly serif: "'Playfair Display', 'Georgia', 'Times New Roman', serif";
        };
        readonly fontSizes: {
            readonly xs: "0.6875rem";
            readonly sm: "0.75rem";
            readonly base: "0.875rem";
            readonly lg: "1rem";
            readonly xl: "1.125rem";
            readonly '2xl': "1.25rem";
            readonly '3xl': "1.5rem";
            readonly '4xl': "1.75rem";
            readonly '5xl': "2rem";
        };
        readonly fontWeights: {
            readonly light: 300;
            readonly regular: 400;
            readonly medium: 500;
            readonly semibold: 600;
            readonly bold: 700;
        };
        readonly lineHeights: {
            readonly tight: "1rem";
            readonly snug: "1.25rem";
            readonly normal: "1.5rem";
            readonly relaxed: "1.75rem";
            readonly loose: "2rem";
            readonly '2xl': "2.25rem";
            readonly '3xl': "2.5rem";
        };
    };
    readonly spacing: {
        readonly xs: 4;
        readonly sm: 8;
        readonly md: 16;
        readonly lg: 24;
        readonly xl: 32;
        readonly '2xl': 48;
        readonly '3xl': 64;
    };
    readonly borders: {
        readonly none: 0;
        readonly xs: 2;
        readonly sm: 4;
        readonly base: 6;
        readonly md: 8;
        readonly lg: 12;
        readonly xl: 16;
        readonly full: 9999;
    };
    readonly shadows: {
        readonly subtle: {
            readonly card: "0 1px 4px rgba(0,0,0,0.06)";
            readonly cardHover: "0 2px 8px rgba(0,0,0,0.08)";
            readonly dropdown: "0 2px 10px rgba(0,0,0,0.07)";
            readonly modal: "0 4px 16px rgba(0,0,0,0.1)";
        };
        readonly medium: {
            readonly card: "0 2px 8px rgba(0,0,0,0.1)";
            readonly cardHover: "0 4px 12px rgba(0,0,0,0.15)";
            readonly dropdown: "0 4px 16px rgba(0,0,0,0.12)";
            readonly modal: "0 8px 24px rgba(0,0,0,0.2)";
        };
        readonly dramatic: {
            readonly card: "0 4px 12px rgba(0,0,0,0.16)";
            readonly cardHover: "0 8px 20px rgba(0,0,0,0.22)";
            readonly dropdown: "0 8px 24px rgba(0,0,0,0.2)";
            readonly modal: "0 16px 40px rgba(0,0,0,0.3)";
        };
    };
};

export declare function useThemePreset(): ThemePresetContextValue;

export declare const warmEarth: ThemePreset;

export { }


declare module '@mui/material/styles' {
    interface Theme {
        customShadows: {
            card: string;
            cardHover: string;
            dropdown: string;
            modal: string;
        };
        lexabit: {
            presetId: string;
            roleColors: Record<string, string>;
            sourceColors: Record<string, string>;
        };
    }
    interface ThemeOptions {
        customShadows?: {
            card?: string;
            cardHover?: string;
            dropdown?: string;
            modal?: string;
        };
        lexabit?: {
            presetId?: string;
            roleColors?: Record<string, string>;
            sourceColors?: Record<string, string>;
        };
    }
}
