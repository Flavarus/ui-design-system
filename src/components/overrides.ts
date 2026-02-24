/**
 * Shared MUI component overrides for the Manda design system.
 *
 * These overrides provide a consistent visual baseline across all Lexabit
 * applications (portal, admin, docs). App-specific tweaks should be layered
 * on top via deep-merge at theme creation time.
 *
 * The `theme` parameter MUST already have `customShadows` populated
 * (card, cardHover, dropdown, modal) via the MUI module augmentation
 * defined in the theme preset.
 */

import type { Theme, Components } from '@mui/material/styles';

export const sharedComponentOverrides = (theme: Theme): Components => ({
  // ---------------------------------------------------------------------------
  // Global CSS Baseline
  // ---------------------------------------------------------------------------
  MuiCssBaseline: {
    styleOverrides: {
      '#root': {
        width: '100%',
        height: '100vh',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Button
  // ---------------------------------------------------------------------------
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightMedium,
        transition: theme.transitions.create(
          ['background-color', 'box-shadow', 'border-color'],
          { duration: theme.transitions.duration.short },
        ),
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: '2px',
        },
      },
      sizeLarge: {
        height: 48,
        padding: '12px 24px',
        fontSize: '1rem',
      },
      sizeMedium: {
        height: 40,
        padding: '10px 20px',
        fontSize: '0.875rem',
      },
      sizeSmall: {
        height: 32,
        padding: '8px 16px',
        fontSize: '0.875rem',
      },
      contained: {
        boxShadow: theme.customShadows.card,
        '&:hover': {
          boxShadow: theme.customShadows.cardHover,
        },
      },
    },
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
        transition: theme.transitions.create(['box-shadow'], {
          duration: theme.transitions.duration.short,
        }),
        '&:hover': {
          boxShadow: theme.customShadows.cardHover,
        },
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Paper
  // ---------------------------------------------------------------------------
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
      elevation1: {
        boxShadow: theme.customShadows.card,
      },
      elevation2: {
        boxShadow: theme.customShadows.cardHover,
      },
      elevation8: {
        boxShadow: theme.customShadows.dropdown,
      },
      elevation24: {
        boxShadow: theme.customShadows.modal,
      },
    },
  },

  // ---------------------------------------------------------------------------
  // TextField
  // ---------------------------------------------------------------------------
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: theme.shape.borderRadius,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },
  },

  // ---------------------------------------------------------------------------
  // OutlinedInput
  // ---------------------------------------------------------------------------
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.text.primary,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main,
        },
      },
      input: {
        '&::placeholder': {
          color: theme.palette.text.disabled,
          opacity: 1,
        },
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Chip
  // ---------------------------------------------------------------------------
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Table Head
  // ---------------------------------------------------------------------------
  MuiTableHead: {
    styleOverrides: {
      root: {
        '& .MuiTableCell-head': {
          backgroundColor: theme.palette.mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[50],
          fontWeight: theme.typography.fontWeightMedium,
          borderBottom: `2px solid ${theme.palette.divider}`,
        },
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Table Row
  // ---------------------------------------------------------------------------
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-selected': {
          backgroundColor: theme.palette.action.selected,
          '&:hover': {
            backgroundColor: theme.palette.action.selected,
          },
        },
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Drawer
  // ---------------------------------------------------------------------------
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.customShadows.dropdown,
      },
    },
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
        color: theme.palette.text.primary,
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Menu
  // ---------------------------------------------------------------------------
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.customShadows.dropdown,
        border: `1px solid ${theme.palette.divider}`,
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Dialog
  // ---------------------------------------------------------------------------
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 12,
        boxShadow: theme.customShadows.modal,
      },
    },
  },
});
