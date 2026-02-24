import { createTheme } from "@mui/material/styles";
import { jsx } from "react/jsx-runtime";
import { createContext, useState, useMemo, useCallback, useContext } from "react";
const brandColors = {
  primary: {
    main: "#3054E7",
    dark: "#2240B8",
    light: "#EBF0FD",
    contrastText: "#FFFFFF"
  },
  secondary: {
    main: "#5C6BC0",
    dark: "#3F51B5",
    light: "#E8EAF6",
    contrastText: "#FFFFFF"
  },
  tertiary: {
    main: "#7C4DFF",
    dark: "#651FFF",
    light: "#EDE7F6",
    contrastText: "#FFFFFF"
  }
};
const semanticColors = {
  success: {
    main: "#4CAF50",
    dark: "#388E3C",
    light: "#E8F5E9",
    contrastText: "#FFFFFF"
  },
  warning: {
    main: "#FF9800",
    dark: "#F57C00",
    light: "#FFF3E0",
    contrastText: "#000000"
  },
  error: {
    main: "#F44336",
    dark: "#D32F2F",
    light: "#FFEBEE",
    contrastText: "#FFFFFF"
  },
  info: {
    main: "#2196F3",
    dark: "#1976D2",
    light: "#E3F2FD",
    contrastText: "#FFFFFF"
  }
};
const neutralColors = {
  50: "#FAFAFA",
  100: "#F5F5F5",
  200: "#EEEEEE",
  300: "#E0E0E0",
  400: "#BDBDBD",
  500: "#9E9E9E",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121"
};
const roleColors = {
  owner: "#D32F2F",
  admin: "#F57C00",
  manager: "#1976D2",
  member: "#388E3C",
  viewer: "#616161",
  billing: "#7B1FA2",
  custom: "#00796B"
};
const sourceColors = {
  roleBased: "#1976D2",
  directGrant: "#F57C00",
  inherited: "#388E3C"
};
const fontFamilies = {
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
  serif: "'Playfair Display', 'Georgia', 'Times New Roman', serif"
};
const fontSizes = {
  xs: "0.6875rem",
  // 11px
  sm: "0.75rem",
  // 12px
  base: "0.875rem",
  // 14px
  lg: "1rem",
  // 16px
  xl: "1.125rem",
  // 18px
  "2xl": "1.25rem",
  // 20px
  "3xl": "1.5rem",
  // 24px
  "4xl": "1.75rem",
  // 28px
  "5xl": "2rem"
  // 32px
};
const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};
const lineHeights = {
  tight: "1rem",
  // 16px
  snug: "1.25rem",
  // 20px
  normal: "1.5rem",
  // 24px
  relaxed: "1.75rem",
  // 28px
  loose: "2rem",
  // 32px
  "2xl": "2.25rem",
  // 36px
  "3xl": "2.5rem"
  // 40px
};
const baseTypography = {
  fontFamily: fontFamilies.primary,
  // Font weights
  fontWeightLight: fontWeights.light,
  fontWeightRegular: fontWeights.regular,
  fontWeightMedium: fontWeights.medium,
  fontWeightBold: fontWeights.semibold,
  // Display & Headers
  h1: {
    fontSize: "2rem",
    // 32px
    lineHeight: "2.5rem",
    // 40px
    fontWeight: 600,
    letterSpacing: "-0.02em",
    "@media (max-width:767px)": {
      fontSize: "1.75rem",
      // 28px
      lineHeight: "2.25rem"
      // 36px
    }
  },
  h2: {
    fontSize: "1.75rem",
    // 28px
    lineHeight: "2.25rem",
    // 36px
    fontWeight: 600,
    letterSpacing: "-0.01em",
    "@media (max-width:767px)": {
      fontSize: "1.5rem",
      // 24px
      lineHeight: "2rem"
      // 32px
    }
  },
  h3: {
    fontSize: "1.5rem",
    // 24px
    lineHeight: "2rem",
    // 32px
    fontWeight: 500,
    letterSpacing: "0em",
    "@media (max-width:767px)": {
      fontSize: "1.25rem",
      // 20px
      lineHeight: "1.75rem"
      // 28px
    }
  },
  h4: {
    fontSize: "1.25rem",
    // 20px
    lineHeight: "1.75rem",
    // 28px
    fontWeight: 500,
    letterSpacing: "0em",
    "@media (max-width:767px)": {
      fontSize: "1.125rem",
      // 18px
      lineHeight: "1.625rem"
      // 26px
    }
  },
  h5: {
    fontSize: "1.125rem",
    // 18px
    lineHeight: "1.625rem",
    // 26px
    fontWeight: 500,
    letterSpacing: "0em",
    "@media (max-width:767px)": {
      fontSize: "1rem",
      // 16px
      lineHeight: "1.5rem"
      // 24px
    }
  },
  h6: {
    fontSize: "1rem",
    // 16px
    lineHeight: "1.5rem",
    // 24px
    fontWeight: 500,
    letterSpacing: "0em"
  },
  // Body text
  body1: {
    fontSize: "1rem",
    // 16px
    lineHeight: "1.5rem",
    // 24px
    fontWeight: 400,
    letterSpacing: "0em"
  },
  body2: {
    fontSize: "0.875rem",
    // 14px
    lineHeight: "1.25rem",
    // 20px
    fontWeight: 400,
    letterSpacing: "0em"
  },
  // Specialized text
  subtitle1: {
    fontSize: "1rem",
    // 16px
    lineHeight: "1.5rem",
    // 24px
    fontWeight: 500,
    letterSpacing: "0em"
  },
  subtitle2: {
    fontSize: "0.875rem",
    // 14px
    lineHeight: "1.25rem",
    // 20px
    fontWeight: 500,
    letterSpacing: "0em"
  },
  caption: {
    fontSize: "0.6875rem",
    // 11px
    lineHeight: "1rem",
    // 16px
    fontWeight: 400,
    letterSpacing: "0.03em"
  },
  overline: {
    fontSize: "0.75rem",
    // 12px
    lineHeight: "1rem",
    // 16px
    fontWeight: 500,
    letterSpacing: "0.05em",
    textTransform: "uppercase"
  },
  button: {
    fontSize: "0.875rem",
    // 14px
    lineHeight: "1.25rem",
    // 20px
    fontWeight: 500,
    letterSpacing: "0.02em",
    textTransform: "none"
  }
};
const spacingScale = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64
};
const baseSpacing = 8;
const densityConfig = {
  compact: {
    label: "Compact",
    multiplier: 0.75,
    unit: 6
  },
  default: {
    label: "Default",
    multiplier: 1,
    unit: 8
  },
  comfortable: {
    label: "Comfortable",
    multiplier: 1.25,
    unit: 10
  }
};
const shadowPresets = {
  subtle: {
    card: "0 1px 4px rgba(0,0,0,0.06)",
    cardHover: "0 2px 8px rgba(0,0,0,0.08)",
    dropdown: "0 2px 10px rgba(0,0,0,0.07)",
    modal: "0 4px 16px rgba(0,0,0,0.1)"
  },
  medium: {
    card: "0 2px 8px rgba(0,0,0,0.1)",
    cardHover: "0 4px 12px rgba(0,0,0,0.15)",
    dropdown: "0 4px 16px rgba(0,0,0,0.12)",
    modal: "0 8px 24px rgba(0,0,0,0.2)"
  },
  dramatic: {
    card: "0 4px 12px rgba(0,0,0,0.16)",
    cardHover: "0 8px 20px rgba(0,0,0,0.22)",
    dropdown: "0 8px 24px rgba(0,0,0,0.2)",
    modal: "0 16px 40px rgba(0,0,0,0.3)"
  }
};
const borderRadiusScale = {
  none: 0,
  xs: 2,
  sm: 4,
  base: 6,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999
};
const motionSpeed = {
  fast: {
    label: "Fast",
    multiplier: 0.6
  },
  default: {
    label: "Default",
    multiplier: 1
  },
  relaxed: {
    label: "Relaxed",
    multiplier: 1.5
  }
};
const baseTransitions = {
  /** Duration values in milliseconds. */
  duration: {
    fast: 100,
    normal: 150,
    slow: 200,
    slower: 300
  },
  /** Easing curves in CSS cubic-bezier notation (matches MUI conventions). */
  easing: {
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.6, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
};
const baseBreakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
};
const customBreakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440
};
const sharedComponentOverrides = (theme) => ({
  // ---------------------------------------------------------------------------
  // Global CSS Baseline
  // ---------------------------------------------------------------------------
  MuiCssBaseline: {
    styleOverrides: {
      "#root": {
        width: "100%",
        height: "100vh"
      }
    }
  },
  // ---------------------------------------------------------------------------
  // Button
  // ---------------------------------------------------------------------------
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        textTransform: "none",
        fontWeight: theme.typography.fontWeightMedium,
        transition: theme.transitions.create(
          ["background-color", "box-shadow", "border-color"],
          { duration: theme.transitions.duration.short }
        ),
        "&:focus-visible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: "2px"
        }
      },
      sizeLarge: {
        height: 48,
        padding: "12px 24px",
        fontSize: "1rem"
      },
      sizeMedium: {
        height: 40,
        padding: "10px 20px",
        fontSize: "0.875rem"
      },
      sizeSmall: {
        height: 32,
        padding: "8px 16px",
        fontSize: "0.875rem"
      },
      contained: {
        boxShadow: theme.customShadows.card,
        "&:hover": {
          boxShadow: theme.customShadows.cardHover
        }
      }
    }
  },
  // ---------------------------------------------------------------------------
  // Card
  // ---------------------------------------------------------------------------
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        boxShadow: theme.customShadows.card,
        border: `1px solid ${theme.palette.divider}`,
        transition: theme.transitions.create(["box-shadow"], {
          duration: theme.transitions.duration.short
        }),
        "&:hover": {
          boxShadow: theme.customShadows.cardHover
        }
      }
    }
  },
  // ---------------------------------------------------------------------------
  // Paper
  // ---------------------------------------------------------------------------
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none"
      },
      elevation1: {
        boxShadow: theme.customShadows.card
      },
      elevation2: {
        boxShadow: theme.customShadows.cardHover
      },
      elevation8: {
        boxShadow: theme.customShadows.dropdown
      },
      elevation24: {
        boxShadow: theme.customShadows.modal
      }
    }
  },
  // ---------------------------------------------------------------------------
  // TextField
  // ---------------------------------------------------------------------------
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: theme.shape.borderRadius,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
            borderColor: theme.palette.primary.main
          }
        }
      }
    }
  },
  // ---------------------------------------------------------------------------
  // OutlinedInput
  // ---------------------------------------------------------------------------
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.text.primary
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main
        }
      },
      input: {
        "&::placeholder": {
          color: theme.palette.text.disabled,
          opacity: 1
        }
      }
    }
  },
  // ---------------------------------------------------------------------------
  // Chip
  // ---------------------------------------------------------------------------
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  },
  // ---------------------------------------------------------------------------
  // Table Head
  // ---------------------------------------------------------------------------
  MuiTableHead: {
    styleOverrides: {
      root: {
        "& .MuiTableCell-head": {
          backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[900] : theme.palette.grey[50],
          fontWeight: theme.typography.fontWeightMedium,
          borderBottom: `2px solid ${theme.palette.divider}`
        }
      }
    }
  },
  // ---------------------------------------------------------------------------
  // Table Row
  // ---------------------------------------------------------------------------
  MuiTableRow: {
    styleOverrides: {
      root: {
        "&:hover": {
          backgroundColor: theme.palette.action.hover
        },
        "&.Mui-selected": {
          backgroundColor: theme.palette.action.selected,
          "&:hover": {
            backgroundColor: theme.palette.action.selected
          }
        }
      }
    }
  },
  // ---------------------------------------------------------------------------
  // Drawer
  // ---------------------------------------------------------------------------
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.customShadows.dropdown
      }
    }
  },
  // ---------------------------------------------------------------------------
  // AppBar
  // ---------------------------------------------------------------------------
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: `0 1px 4px ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary
      }
    }
  },
  // ---------------------------------------------------------------------------
  // Menu
  // ---------------------------------------------------------------------------
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.customShadows.dropdown,
        border: `1px solid ${theme.palette.divider}`
      }
    }
  },
  // ---------------------------------------------------------------------------
  // Dialog
  // ---------------------------------------------------------------------------
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 12,
        boxShadow: theme.customShadows.modal
      }
    }
  }
});
const raComponentOverrides = (theme) => ({
  // CSS Baseline (React Admin layout adjustments)
  MuiCssBaseline: {
    styleOverrides: {
      "#main-content.RaLayout-content": {
        backgroundColor: theme.palette.background.paper,
        padding: "16px",
        borderRadius: "8px"
      }
    }
  },
  // React Admin Filter Form
  RaFilterForm: {
    styleOverrides: {
      root: {
        paddingBottom: "8px"
      }
    }
  },
  // React Admin Login Form
  RaLoginForm: {
    styleOverrides: {
      root: {
        "& .MuiFormControl-root": {
          width: "100%"
        }
      }
    }
  },
  // Scoped CSS Baseline (main content min-width fix)
  MuiScopedCssBaseline: {
    styleOverrides: {
      root: {
        "& main": {
          minWidth: 0
        }
      }
    }
  },
  // MenuItem (increased vertical padding for touch targets)
  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: "8px",
        paddingBottom: "8px"
      }
    }
  }
});
function buildTypography(preset) {
  if (!preset.typography) return { ...baseTypography };
  const merged = { ...baseTypography };
  for (const [key, value] of Object.entries(preset.typography)) {
    const base = merged[key];
    if (typeof value === "object" && value !== null && typeof base === "object" && base !== null) {
      merged[key] = { ...base, ...value };
    } else {
      merged[key] = value;
    }
  }
  return merged;
}
function getSpacingFactor(density) {
  return densityConfig[density].unit;
}
function buildTransitions(speed) {
  const m = motionSpeed[speed].multiplier;
  return {
    duration: {
      shortest: Math.round(100 * m),
      shorter: Math.round(150 * m),
      short: Math.round(200 * m),
      standard: Math.round(300 * m),
      complex: Math.round(400 * m),
      enteringScreen: Math.round(225 * m),
      leavingScreen: Math.round(195 * m)
    },
    easing: {
      easeInOut: baseTransitions.easing.easeInOut,
      easeOut: baseTransitions.easing.easeOut,
      easeIn: baseTransitions.easing.easeIn,
      sharp: baseTransitions.easing.easeInOut
    }
  };
}
function mergeComponents(a, b) {
  return { ...a, ...b };
}
function createLexabitTheme(preset, mode) {
  const paletteConfig = preset.palette[mode];
  const typography = buildTypography(preset);
  const spacingFactor = getSpacingFactor(preset.density);
  const transitions = buildTransitions(preset.motion);
  const customShadows = { ...preset.shadows };
  const baseTheme = createTheme({
    palette: {
      mode,
      primary: paletteConfig.primary,
      secondary: paletteConfig.secondary,
      ...paletteConfig.success && { success: paletteConfig.success },
      ...paletteConfig.warning && { warning: paletteConfig.warning },
      ...paletteConfig.error && { error: paletteConfig.error },
      ...paletteConfig.info && { info: paletteConfig.info },
      background: paletteConfig.background,
      text: paletteConfig.text,
      divider: paletteConfig.divider,
      ...paletteConfig.action && { action: paletteConfig.action }
    },
    typography,
    spacing: spacingFactor,
    breakpoints: { values: baseBreakpoints },
    shape: { borderRadius: preset.shape.borderRadius },
    transitions,
    customShadows,
    lexabit: {
      presetId: preset.id,
      roleColors: { ...roleColors },
      sourceColors: { ...sourceColors }
    }
  });
  const baseOverrides = sharedComponentOverrides(baseTheme);
  const raOverrides = raComponentOverrides(baseTheme);
  const presetOverrides = preset.componentOverrides ? preset.componentOverrides(baseTheme) : {};
  const allOverrides = mergeComponents(
    mergeComponents(baseOverrides, raOverrides),
    presetOverrides
  );
  return createTheme(baseTheme, {
    components: allOverrides
  });
}
const lexabitProfessional = {
  id: "lexabit-professional",
  name: "themes.lexabitProfessional.name",
  description: "themes.lexabitProfessional.description",
  palette: {
    light: {
      primary: { main: "#3054E7", dark: "#2240B8", light: "#EBF0FD", contrastText: "#FFFFFF" },
      secondary: { main: "#5C6BC0", dark: "#3F51B5", light: "#E8EAF6", contrastText: "#FFFFFF" },
      background: { default: "#F8F9FC", paper: "#FFFFFF" },
      text: { primary: "#1A1A2E", secondary: "#4A4A68", disabled: "#9E9E9E" },
      divider: "#E0E0E0"
    },
    dark: {
      primary: { main: "#5B7BF5", dark: "#3054E7", light: "#1E2A4A", contrastText: "#FFFFFF" },
      secondary: { main: "#7986CB", dark: "#5C6BC0", light: "#1A1F3A", contrastText: "#FFFFFF" },
      background: { default: "#0F1117", paper: "#1A1D2E" },
      text: { primary: "#E8E8F0", secondary: "#A0A0B8", disabled: "#606078" },
      divider: "#2A2D3E"
    }
  },
  shape: { borderRadius: 6 },
  density: "default",
  shadows: {
    card: "0 2px 8px rgba(0,0,0,0.1)",
    cardHover: "0 4px 12px rgba(0,0,0,0.15)",
    dropdown: "0 4px 16px rgba(0,0,0,0.12)",
    modal: "0 8px 24px rgba(0,0,0,0.2)"
  },
  motion: "default"
};
const nordicFrost = {
  id: "nordic-frost",
  name: "themes.nordicFrost.name",
  description: "themes.nordicFrost.description",
  palette: {
    light: {
      primary: { main: "#546E7A", dark: "#37474F", light: "#ECEFF1", contrastText: "#FFFFFF" },
      secondary: { main: "#B0BEC5", dark: "#78909C", light: "#F5F7F8", contrastText: "#263238" },
      success: { main: "#66BB6A", dark: "#43A047", light: "#E8F5E9", contrastText: "#FFFFFF" },
      warning: { main: "#FFA726", dark: "#FB8C00", light: "#FFF3E0", contrastText: "#000000" },
      error: { main: "#EF5350", dark: "#E53935", light: "#FFEBEE", contrastText: "#FFFFFF" },
      info: { main: "#42A5F5", dark: "#1E88E5", light: "#E3F2FD", contrastText: "#FFFFFF" },
      background: { default: "#F5F7FA", paper: "#FFFFFF" },
      text: { primary: "#1C2B33", secondary: "#4A5E6A", disabled: "#90A4AE" },
      divider: "#CFD8DC",
      action: {
        active: "#546E7A",
        hover: "rgba(84,110,122,0.06)",
        selected: "rgba(84,110,122,0.10)",
        disabled: "#B0BEC5",
        disabledBackground: "#ECEFF1"
      }
    },
    dark: {
      primary: { main: "#78909C", dark: "#546E7A", light: "#1A2530", contrastText: "#FFFFFF" },
      secondary: { main: "#B0BEC5", dark: "#90A4AE", light: "#1E2A30", contrastText: "#0D1117" },
      success: { main: "#66BB6A", dark: "#43A047", light: "#1B2E1C", contrastText: "#FFFFFF" },
      warning: { main: "#FFA726", dark: "#FB8C00", light: "#2E2214", contrastText: "#000000" },
      error: { main: "#EF5350", dark: "#E53935", light: "#2E1616", contrastText: "#FFFFFF" },
      info: { main: "#42A5F5", dark: "#1E88E5", light: "#14202E", contrastText: "#FFFFFF" },
      background: { default: "#0D1117", paper: "#161B22" },
      text: { primary: "#C9D1D9", secondary: "#8B949E", disabled: "#484F58" },
      divider: "#21262D",
      action: {
        active: "#78909C",
        hover: "rgba(120,144,156,0.08)",
        selected: "rgba(120,144,156,0.14)",
        disabled: "#484F58",
        disabledBackground: "#21262D"
      }
    }
  },
  shape: { borderRadius: 2 },
  density: "compact",
  shadows: {
    card: "0 1px 4px rgba(0,0,0,0.06)",
    cardHover: "0 2px 8px rgba(0,0,0,0.1)",
    dropdown: "0 2px 12px rgba(0,0,0,0.08)",
    modal: "0 4px 16px rgba(0,0,0,0.14)"
  },
  motion: "fast"
};
const midnightFocus = {
  id: "midnight-focus",
  name: "themes.midnightFocus.name",
  description: "themes.midnightFocus.description",
  palette: {
    light: {
      primary: { main: "#5C6BC0", dark: "#3F51B5", light: "#E8EAF6", contrastText: "#FFFFFF" },
      secondary: { main: "#9575CD", dark: "#7E57C2", light: "#EDE7F6", contrastText: "#FFFFFF" },
      success: { main: "#66BB6A", dark: "#43A047", light: "#E8F5E9", contrastText: "#FFFFFF" },
      warning: { main: "#FFCA28", dark: "#FFB300", light: "#FFF8E1", contrastText: "#000000" },
      error: { main: "#EF5350", dark: "#E53935", light: "#FFEBEE", contrastText: "#FFFFFF" },
      info: { main: "#5C6BC0", dark: "#3F51B5", light: "#E8EAF6", contrastText: "#FFFFFF" },
      background: { default: "#F5F5FA", paper: "#FFFFFF" },
      text: { primary: "#1A1A2E", secondary: "#4A4A68", disabled: "#9E9EB8" },
      divider: "#D8D8E8",
      action: {
        active: "#5C6BC0",
        hover: "rgba(92,107,192,0.06)",
        selected: "rgba(92,107,192,0.10)",
        disabled: "#B0B0C8",
        disabledBackground: "#E8E8F0"
      }
    },
    dark: {
      primary: { main: "#7986CB", dark: "#5C6BC0", light: "#1A1D3A", contrastText: "#FFFFFF" },
      secondary: { main: "#B39DDB", dark: "#9575CD", light: "#1E1830", contrastText: "#FFFFFF" },
      success: { main: "#81C784", dark: "#66BB6A", light: "#12201A", contrastText: "#FFFFFF" },
      warning: { main: "#FFD54F", dark: "#FFCA28", light: "#201A0A", contrastText: "#000000" },
      error: { main: "#E57373", dark: "#EF5350", light: "#201214", contrastText: "#FFFFFF" },
      info: { main: "#7986CB", dark: "#5C6BC0", light: "#14162A", contrastText: "#FFFFFF" },
      background: { default: "#0A0A14", paper: "#12121E" },
      text: { primary: "#E0E0F0", secondary: "#A0A0C0", disabled: "#505068" },
      divider: "#1E1E30",
      action: {
        active: "#7986CB",
        hover: "rgba(121,134,203,0.10)",
        selected: "rgba(121,134,203,0.16)",
        disabled: "#505068",
        disabledBackground: "#1E1E30"
      }
    }
  },
  shape: { borderRadius: 8 },
  density: "comfortable",
  shadows: {
    card: "0 4px 12px rgba(0,0,0,0.2)",
    cardHover: "0 8px 20px rgba(0,0,0,0.28)",
    dropdown: "0 6px 24px rgba(0,0,0,0.25)",
    modal: "0 12px 40px rgba(0,0,0,0.35)"
  },
  motion: "relaxed"
};
const warmEarth = {
  id: "warm-earth",
  name: "themes.warmEarth.name",
  description: "themes.warmEarth.description",
  palette: {
    light: {
      primary: { main: "#BF5B3D", dark: "#9C4428", light: "#FBE9E3", contrastText: "#FFFFFF" },
      secondary: { main: "#FFA726", dark: "#FB8C00", light: "#FFF3E0", contrastText: "#000000" },
      success: { main: "#6D9B5A", dark: "#547A42", light: "#EDF5E8", contrastText: "#FFFFFF" },
      warning: { main: "#FFA726", dark: "#FB8C00", light: "#FFF3E0", contrastText: "#000000" },
      error: { main: "#C62828", dark: "#B71C1C", light: "#FFEBEE", contrastText: "#FFFFFF" },
      info: { main: "#5D8AA8", dark: "#456D8A", light: "#E6F0F6", contrastText: "#FFFFFF" },
      background: { default: "#FBF8F5", paper: "#FFFFFF" },
      text: { primary: "#2D1F14", secondary: "#5D4E42", disabled: "#A89888" },
      divider: "#E4DCD4",
      action: {
        active: "#BF5B3D",
        hover: "rgba(191,91,61,0.06)",
        selected: "rgba(191,91,61,0.10)",
        disabled: "#C8B8A8",
        disabledBackground: "#F0EBE5"
      }
    },
    dark: {
      primary: { main: "#D4775C", dark: "#BF5B3D", light: "#2E1C14", contrastText: "#FFFFFF" },
      secondary: { main: "#FFB74D", dark: "#FFA726", light: "#2E2214", contrastText: "#000000" },
      success: { main: "#81B06A", dark: "#6D9B5A", light: "#1A2416", contrastText: "#FFFFFF" },
      warning: { main: "#FFB74D", dark: "#FFA726", light: "#2E2214", contrastText: "#000000" },
      error: { main: "#EF5350", dark: "#C62828", light: "#2E1414", contrastText: "#FFFFFF" },
      info: { main: "#7AAAC4", dark: "#5D8AA8", light: "#14202A", contrastText: "#FFFFFF" },
      background: { default: "#1A1410", paper: "#241E18" },
      text: { primary: "#EDE4DA", secondary: "#B8A898", disabled: "#685848" },
      divider: "#342A22",
      action: {
        active: "#D4775C",
        hover: "rgba(212,119,92,0.10)",
        selected: "rgba(212,119,92,0.16)",
        disabled: "#685848",
        disabledBackground: "#342A22"
      }
    }
  },
  typography: {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 }
  },
  shape: { borderRadius: 12 },
  density: "default",
  shadows: {
    card: "0 2px 8px rgba(0,0,0,0.1)",
    cardHover: "0 4px 12px rgba(0,0,0,0.15)",
    dropdown: "0 4px 16px rgba(0,0,0,0.12)",
    modal: "0 8px 24px rgba(0,0,0,0.2)"
  },
  motion: "default"
};
const oceanBreeze = {
  id: "ocean-breeze",
  name: "themes.oceanBreeze.name",
  description: "themes.oceanBreeze.description",
  palette: {
    light: {
      primary: { main: "#00897B", dark: "#00695C", light: "#E0F2F1", contrastText: "#FFFFFF" },
      secondary: { main: "#4DD0E1", dark: "#00ACC1", light: "#E0F7FA", contrastText: "#000000" },
      success: { main: "#66BB6A", dark: "#43A047", light: "#E8F5E9", contrastText: "#FFFFFF" },
      warning: { main: "#FFB74D", dark: "#FFA726", light: "#FFF3E0", contrastText: "#000000" },
      error: { main: "#EF5350", dark: "#E53935", light: "#FFEBEE", contrastText: "#FFFFFF" },
      info: { main: "#29B6F6", dark: "#0288D1", light: "#E1F5FE", contrastText: "#FFFFFF" },
      background: { default: "#F0F9F8", paper: "#FFFFFF" },
      text: { primary: "#1A2E2D", secondary: "#4A6462", disabled: "#90ABA8" },
      divider: "#C8E0DE",
      action: {
        active: "#00897B",
        hover: "rgba(0,137,123,0.06)",
        selected: "rgba(0,137,123,0.10)",
        disabled: "#B0C8C6",
        disabledBackground: "#E8F4F2"
      }
    },
    dark: {
      primary: { main: "#26A69A", dark: "#00897B", light: "#0E2420", contrastText: "#FFFFFF" },
      secondary: { main: "#4DD0E1", dark: "#26C6DA", light: "#0E2228", contrastText: "#000000" },
      success: { main: "#66BB6A", dark: "#43A047", light: "#12201A", contrastText: "#FFFFFF" },
      warning: { main: "#FFB74D", dark: "#FFA726", light: "#201A0E", contrastText: "#000000" },
      error: { main: "#EF5350", dark: "#E53935", light: "#201212", contrastText: "#FFFFFF" },
      info: { main: "#4FC3F7", dark: "#29B6F6", light: "#0E1C24", contrastText: "#FFFFFF" },
      background: { default: "#0A1514", paper: "#12201F" },
      text: { primary: "#D0E8E6", secondary: "#8AABA8", disabled: "#4A6462" },
      divider: "#1A2E2D",
      action: {
        active: "#26A69A",
        hover: "rgba(38,166,154,0.10)",
        selected: "rgba(38,166,154,0.16)",
        disabled: "#4A6462",
        disabledBackground: "#1A2E2D"
      }
    }
  },
  typography: {
    h1: { fontWeight: 400 },
    h2: { fontWeight: 400 },
    h3: { fontWeight: 400 },
    h4: { fontWeight: 400 },
    h5: { fontWeight: 400 },
    h6: { fontWeight: 400 },
    body1: { fontWeight: 300 },
    body2: { fontWeight: 300 }
  },
  shape: { borderRadius: 10 },
  density: "comfortable",
  shadows: {
    card: "0 1px 4px rgba(0,0,0,0.06)",
    cardHover: "0 2px 8px rgba(0,0,0,0.1)",
    dropdown: "0 2px 12px rgba(0,0,0,0.08)",
    modal: "0 4px 16px rgba(0,0,0,0.14)"
  },
  motion: "relaxed"
};
const classicOverrides = (theme) => ({
  // Colored AppBar — the original blue header with white text
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.primary.main,
        color: "#FFFFFF",
        boxShadow: "none",
        borderBottom: "none"
      }
    }
  },
  // Simple white sidebar with a light border (no shadow)
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: "1px solid #dcdcdc",
        boxShadow: "none"
      },
      root: {
        "&.RaSidebar-docked": {
          backgroundColor: "white",
          borderRight: "1px solid #dcdcdc"
        }
      }
    }
  },
  // Simpler card — no hover shadow transition
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        boxShadow: theme.customShadows.card,
        border: `1px solid ${theme.palette.divider}`
      }
    }
  },
  // Dialog with default MUI border radius
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 4,
        boxShadow: theme.customShadows.modal
      }
    }
  },
  // Tabs — restore MUI default uppercase
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "uppercase",
        letterSpacing: "0.02857em"
      }
    }
  },
  // Buttons — restore MUI default uppercase (overrides shared textTransform: 'none')
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "uppercase"
      }
    }
  },
  // Table head — restore bold weight and original background
  MuiTableHead: {
    styleOverrides: {
      root: {
        "& .MuiTableCell-head": {
          fontWeight: 700,
          backgroundColor: "#f0f0f0",
          borderBottom: `1px solid ${theme.palette.divider}`
        }
      }
    }
  }
});
const lexabitClassic = {
  id: "lexabit-classic",
  name: "themes.lexabitClassic.name",
  description: "themes.lexabitClassic.description",
  palette: {
    light: {
      primary: { main: "#3054E7", dark: "#2240B8", light: "#EBF0FD", contrastText: "#FFFFFF" },
      secondary: { main: "#FFFFFF", dark: "#F5F5F5", light: "#FFFFFF", contrastText: "#3054E7" },
      background: { default: "#F9FAFB", paper: "#FFFFFF" },
      text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" },
      divider: "rgba(0, 0, 0, 0.12)"
    },
    dark: {
      primary: { main: "#5B7BF5", dark: "#3054E7", light: "#1E2A4A", contrastText: "#FFFFFF" },
      secondary: { main: "#E0E0E0", dark: "#BDBDBD", light: "#2A2A2A", contrastText: "#212121" },
      background: { default: "#121212", paper: "#1E1E1E" },
      text: { primary: "#FAFAFA", secondary: "#F5F5F5", disabled: "#9E9E9E" },
      divider: "#424242"
    }
  },
  // Typography: restore MUI defaults (Roboto, larger headings, uppercase buttons)
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontSize: "2.125rem", lineHeight: 1.235, fontWeight: 400, letterSpacing: "0.00735em" },
    h6: { fontSize: "1.25rem", lineHeight: 1.6, fontWeight: 500, letterSpacing: "0.0075em" },
    button: { textTransform: "uppercase", letterSpacing: "0.02857em" }
  },
  shape: { borderRadius: 4 },
  density: "default",
  shadows: {
    card: "0 2px 8px rgba(0,0,0,0.1)",
    cardHover: "0 4px 12px rgba(0,0,0,0.15)",
    dropdown: "0 4px 16px rgba(0,0,0,0.12)",
    modal: "0 8px 24px rgba(0,0,0,0.2)"
  },
  motion: "default",
  componentOverrides: classicOverrides
};
const playfulVividOverrides = (theme) => ({
  // MuiCard — semi-transparent with backdrop blur and indigo-tinted border
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.mode === "dark" ? "rgba(30, 27, 75, 0.55)" : "rgba(255, 255, 255, 0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.45)"}`,
        boxShadow: theme.customShadows.card
      }
    }
  },
  // MuiDialog — glass modal with blurred backdrop
  MuiDialog: {
    styleOverrides: {
      paper: {
        backgroundColor: theme.palette.mode === "dark" ? "rgba(30, 27, 75, 0.80)" : "rgba(255, 255, 255, 0.80)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.50)"}`,
        boxShadow: theme.customShadows.modal
      }
    }
  },
  // MuiAppBar — translucent frosted glass top bar
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.mode === "dark" ? "rgba(17, 15, 50, 0.75)" : "rgba(245, 243, 255, 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(99, 102, 241, 0.15)"}`,
        boxShadow: "none",
        color: theme.palette.mode === "dark" ? theme.palette.text.primary : theme.palette.text.primary
      }
    }
  }
});
const playfulVivid = {
  id: "playful-vivid",
  name: "themes.playfulVivid.name",
  description: "themes.playfulVivid.description",
  palette: {
    light: {
      primary: { main: "#6366F1", dark: "#4F46E5", light: "#EEF2FF", contrastText: "#FFFFFF" },
      secondary: { main: "#818CF8", dark: "#6366F1", light: "#EEF2FF", contrastText: "#FFFFFF" },
      success: { main: "#10B981", dark: "#059669", light: "#D1FAE5", contrastText: "#FFFFFF" },
      warning: { main: "#F59E0B", dark: "#D97706", light: "#FEF3C7", contrastText: "#000000" },
      error: { main: "#EF4444", dark: "#DC2626", light: "#FEE2E2", contrastText: "#FFFFFF" },
      info: { main: "#6366F1", dark: "#4F46E5", light: "#EEF2FF", contrastText: "#FFFFFF" },
      background: { default: "#F5F3FF", paper: "#FFFFFF" },
      text: { primary: "#1E1B4B", secondary: "#4C4980", disabled: "#9896B8" },
      divider: "#DDD6FE",
      action: {
        active: "#6366F1",
        hover: "rgba(99,102,241,0.06)",
        selected: "rgba(99,102,241,0.10)",
        disabled: "#B0AED8",
        disabledBackground: "#EEF2FF"
      }
    },
    dark: {
      primary: { main: "#818CF8", dark: "#6366F1", light: "#1E1B4B", contrastText: "#FFFFFF" },
      secondary: { main: "#A5B4FC", dark: "#818CF8", light: "#1A1844", contrastText: "#FFFFFF" },
      success: { main: "#34D399", dark: "#10B981", light: "#0E2E22", contrastText: "#000000" },
      warning: { main: "#FCD34D", dark: "#F59E0B", light: "#2A200A", contrastText: "#000000" },
      error: { main: "#F87171", dark: "#EF4444", light: "#2A1010", contrastText: "#FFFFFF" },
      info: { main: "#818CF8", dark: "#6366F1", light: "#18163A", contrastText: "#FFFFFF" },
      background: { default: "#0D0B1E", paper: "#17143A" },
      text: { primary: "#EDE9FE", secondary: "#A5A1D0", disabled: "#5A5878" },
      divider: "#2D2A5A",
      action: {
        active: "#818CF8",
        hover: "rgba(129,140,248,0.10)",
        selected: "rgba(129,140,248,0.16)",
        disabled: "#5A5878",
        disabledBackground: "#1E1B4B"
      }
    }
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 }
  },
  shape: { borderRadius: 10 },
  density: "default",
  // Diffused, indigo-tinted shadows — softer and more colourful than Professional
  shadows: {
    card: "0 2px 12px rgba(99,102,241,0.10), 0 1px 4px rgba(0,0,0,0.06)",
    cardHover: "0 6px 20px rgba(99,102,241,0.16), 0 2px 8px rgba(0,0,0,0.08)",
    dropdown: "0 4px 16px rgba(99,102,241,0.14), 0 2px 6px rgba(0,0,0,0.08)",
    modal: "0 8px 32px rgba(99,102,241,0.18), 0 4px 12px rgba(0,0,0,0.12)"
  },
  motion: "default",
  componentOverrides: playfulVividOverrides
};
const allPresets = [
  lexabitProfessional,
  lexabitClassic,
  nordicFrost,
  midnightFocus,
  warmEarth,
  oceanBreeze,
  playfulVivid
];
const ThemePresetContext = createContext(null);
const STORAGE_KEY_PRESET = "lexabit-theme-preset";
const STORAGE_KEY_MODE = "lexabit-theme-mode";
function loadPresetId() {
  try {
    return localStorage.getItem(STORAGE_KEY_PRESET);
  } catch {
    return null;
  }
}
function savePresetId(id) {
  try {
    localStorage.setItem(STORAGE_KEY_PRESET, id);
  } catch {
  }
}
function loadMode() {
  try {
    const v = localStorage.getItem(STORAGE_KEY_MODE);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}
function saveMode(mode) {
  try {
    localStorage.setItem(STORAGE_KEY_MODE, mode);
  } catch {
  }
}
function ThemePresetProvider({ presets, defaultPresetId, children }) {
  const [presetId, setPresetIdState] = useState(() => {
    const stored = loadPresetId();
    return presets.some((p) => p.id === stored) ? stored : defaultPresetId;
  });
  const [mode, setModeState] = useState(() => {
    var _a;
    const stored = loadMode();
    if (stored) return stored;
    if (typeof window !== "undefined" && ((_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-color-scheme: dark)").matches)) {
      return "dark";
    }
    return "light";
  });
  const currentPreset = useMemo(
    () => presets.find((p) => p.id === presetId) || presets[0],
    [presets, presetId]
  );
  const theme = useMemo(() => createLexabitTheme(currentPreset, "light"), [currentPreset]);
  const darkTheme = useMemo(() => createLexabitTheme(currentPreset, "dark"), [currentPreset]);
  const setPreset = useCallback((id) => {
    setPresetIdState(id);
    savePresetId(id);
  }, []);
  const setMode = useCallback((m) => {
    setModeState(m);
    saveMode(m);
  }, []);
  const toggleMode = useCallback(() => {
    setModeState((prev) => {
      const next = prev === "light" ? "dark" : "light";
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
    currentPreset
  }), [presetId, mode, setPreset, setMode, toggleMode, theme, darkTheme, presets, currentPreset]);
  return /* @__PURE__ */ jsx(ThemePresetContext.Provider, { value, children });
}
function useThemePreset() {
  const context = useContext(ThemePresetContext);
  if (!context) {
    throw new Error("useThemePreset must be used within a ThemePresetProvider");
  }
  return context;
}
function useDesignTokens() {
  return {
    colors: { brand: brandColors, semantic: semanticColors, neutral: neutralColors, role: roleColors, source: sourceColors },
    typography: { fontFamilies, fontSizes, fontWeights, lineHeights },
    spacing: spacingScale,
    borders: borderRadiusScale,
    shadows: shadowPresets
  };
}
export {
  ThemePresetContext,
  ThemePresetProvider,
  allPresets,
  baseBreakpoints,
  baseSpacing,
  baseTransitions,
  baseTypography,
  borderRadiusScale,
  brandColors,
  createLexabitTheme,
  customBreakpoints,
  densityConfig,
  fontFamilies,
  fontSizes,
  fontWeights,
  lexabitClassic,
  lexabitProfessional,
  lineHeights,
  midnightFocus,
  motionSpeed,
  neutralColors,
  nordicFrost,
  oceanBreeze,
  raComponentOverrides,
  roleColors,
  semanticColors,
  shadowPresets,
  sharedComponentOverrides,
  sourceColors,
  spacingScale,
  useDesignTokens,
  useThemePreset,
  warmEarth
};
//# sourceMappingURL=index.js.map
