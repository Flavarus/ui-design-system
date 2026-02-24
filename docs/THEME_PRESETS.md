# Theme Presets

The Lexabit portal offers 6 visual theme presets. Users can switch between them at runtime via Profile > Preferences. Each preset has full light and dark mode support.

## 1. Professional (Default)

**ID**: `lexabit-professional`

The canonical Lexabit brand theme. Clean, trustworthy, and focused on compliance work.

| Property | Value |
|----------|-------|
| Primary | #3054E7 (Manda Blue) |
| Secondary | #5C6BC0 (Indigo) |
| Font | Inter (sans-serif) |
| Border Radius | 6px (rounded) |
| Density | Default (8px base) |
| Shadows | Medium |
| Motion | Default |

**Best for**: General use. Balanced between information density and visual comfort. Recommended default for all users.

---

## 2. Nordic Frost

**ID**: `nordic-frost`

Scandinavian minimalism. Cool and efficient with sharp edges and tight spacing — ideal for power users who process large amounts of data.

| Property | Value |
|----------|-------|
| Primary | #546E7A (Blue Grey 600) |
| Secondary | #B0BEC5 (Blue Grey 200) |
| Font | Inter (sans-serif) |
| Border Radius | 2px (sharp) |
| Density | Compact (6px base) |
| Shadows | Subtle |
| Motion | Fast |

**Best for**: Data-heavy workflows, users who prefer minimal visual noise and maximum information density.

---

## 3. Midnight Focus

**ID**: `midnight-focus`

Deep and immersive. Rich purples and comfortable spacing for extended work sessions, especially in low-light environments.

| Property | Value |
|----------|-------|
| Primary | #5C6BC0 (Indigo) |
| Secondary | #9575CD (Deep Purple 300) |
| Font | Inter (sans-serif) |
| Border Radius | 8px (moderately rounded) |
| Density | Comfortable (10px base) |
| Shadows | Dramatic |
| Motion | Relaxed |

**Best for**: Evening/nighttime work, users who prefer dark interfaces, extended reading sessions.

---

## 4. Warm Earth

**ID**: `warm-earth`

Grounded and distinguished. Warm terracotta tones with serif headings for a classic, authoritative feel.

| Property | Value |
|----------|-------|
| Primary | #BF5B3D (Terracotta) |
| Secondary | #FFA726 (Amber) |
| Font | Playfair Display (serif headings), Inter (body) |
| Border Radius | 12px (large, organic) |
| Density | Default (8px base) |
| Shadows | Medium |
| Motion | Default |

**Best for**: Users who prefer warmth and personality. The serif headings add a distinguished, legal-document quality appropriate for law firm users.

---

## 5. Ocean Breeze

**ID**: `ocean-breeze`

Calm and refreshing. Teal tones with light font weights and subtle shadows for a tranquil, focused experience.

| Property | Value |
|----------|-------|
| Primary | #00897B (Teal 600) |
| Secondary | #4DD0E1 (Cyan 300) |
| Font | Inter (light weight: 400 headings, 300 body) |
| Border Radius | 10px (soft, rounded) |
| Density | Comfortable (10px base) |
| Shadows | Subtle |
| Motion | Relaxed |

**Best for**: Users who prefer a calming, low-intensity interface. Good for long sessions where visual fatigue is a concern.

---

## 6. Playful Vivid

**ID**: `playful-vivid`

Vibrant and modern. Frosted glass aesthetic with layered depth and indigo accents. Semi-transparent card and AppBar surfaces use backdrop-filter blur to create a glassmorphism effect, giving the interface a lively, contemporary feel.

| Property | Value |
|----------|-------|
| Primary | #6366F1 (Indigo 500) |
| Secondary | #818CF8 (Indigo 400) |
| Success accent | #10B981 (Emerald) |
| Font | Plus Jakarta Sans (sans-serif) |
| Border Radius | 10px (soft, rounded) |
| Density | Default (8px base) |
| Shadows | Diffused, indigo-tinted |
| Motion | Default |
| Special effects | Backdrop blur 12-20px on cards, dialogs, AppBar |

**Best for**: Users who want a vibrant, modern, playful interface. Particularly effective on displays that support backdrop-filter (all modern browsers). The indigo color family provides strong WCAG AA contrast in both light and dark modes.

---

## Adding New Presets

### Manual (Now)

1. Create `src/themes/presets/{preset-name}.ts` implementing the `ThemePreset` interface
2. Export from `src/themes/presets/index.ts` and add to `allPresets`
3. Add i18n keys to `src/i18n/en.ts` and `src/i18n/no.ts`
4. Update this document with the new preset's details
5. Run `npm run typecheck && npm run build`

### Per-Variant Typography Overrides

Presets can include a `typography` field with `Partial<TypographyOptions>` to override individual MUI typography variants. These are deep-merged on top of the base Inter typography.

Example — the Classic preset restores MUI defaults (Roboto, larger headings, uppercase buttons):

```typescript
typography: {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h4: { fontSize: '2.125rem', lineHeight: 1.235, fontWeight: 400, letterSpacing: '0.00735em' },
  h6: { fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 500, letterSpacing: '0.0075em' },
  button: { textTransform: 'uppercase', letterSpacing: '0.02857em' },
},
```

Most presets do not need typography overrides — they inherit the base Inter typography automatically.

### With ui-ux-pro-max (Future)

1. Run: `python3 skills/ui-ux-pro-max/scripts/search.py "<keywords>" --design-system --persist -p "Lexabit" --page "<preset-name>"`
2. Pass the generated MASTER page to the `design-system-manager` agent
3. Agent converts recommendations to a `ThemePreset` TypeScript object
4. Follow steps 2-5 above
