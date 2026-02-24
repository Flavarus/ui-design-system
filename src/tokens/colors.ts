/**
 * Brand and semantic color tokens for the Manda design system.
 *
 * Primary brand color: #3054E7 (Manda Blue)
 * All variants are derived from this base.
 */

// ---------------------------------------------------------------------------
// Brand Colors
// ---------------------------------------------------------------------------

export const brandColors = {
  primary: {
    main: '#3054E7',
    dark: '#2240B8',
    light: '#EBF0FD',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#5C6BC0',
    dark: '#3F51B5',
    light: '#E8EAF6',
    contrastText: '#FFFFFF',
  },
  tertiary: {
    main: '#7C4DFF',
    dark: '#651FFF',
    light: '#EDE7F6',
    contrastText: '#FFFFFF',
  },
} as const;

// ---------------------------------------------------------------------------
// Semantic Colors (Material standard)
// ---------------------------------------------------------------------------

export const semanticColors = {
  success: {
    main: '#4CAF50',
    dark: '#388E3C',
    light: '#E8F5E9',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#FF9800',
    dark: '#F57C00',
    light: '#FFF3E0',
    contrastText: '#000000',
  },
  error: {
    main: '#F44336',
    dark: '#D32F2F',
    light: '#FFEBEE',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#2196F3',
    dark: '#1976D2',
    light: '#E3F2FD',
    contrastText: '#FFFFFF',
  },
} as const;

// ---------------------------------------------------------------------------
// Neutral Grays (Material 50-900 scale)
// ---------------------------------------------------------------------------

export const neutralColors = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#EEEEEE',
  300: '#E0E0E0',
  400: '#BDBDBD',
  500: '#9E9E9E',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
} as const;

// ---------------------------------------------------------------------------
// Role Colors (compliance domain)
// ---------------------------------------------------------------------------

export const roleColors = {
  owner: '#D32F2F',
  admin: '#F57C00',
  manager: '#1976D2',
  member: '#388E3C',
  viewer: '#616161',
  billing: '#7B1FA2',
  custom: '#00796B',
} as const;

// ---------------------------------------------------------------------------
// Permission Source Colors
// ---------------------------------------------------------------------------

export const sourceColors = {
  roleBased: '#1976D2',
  directGrant: '#F57C00',
  inherited: '#388E3C',
} as const;
