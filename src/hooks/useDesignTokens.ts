import { brandColors, semanticColors, neutralColors, roleColors, sourceColors } from '../tokens/colors';
import { fontFamilies, fontSizes, fontWeights, lineHeights } from '../tokens/typography';
import { spacingScale } from '../tokens/spacing';
import { borderRadiusScale } from '../tokens/borders';
import { shadowPresets } from '../tokens/shadows';

export function useDesignTokens() {
  return {
    colors: { brand: brandColors, semantic: semanticColors, neutral: neutralColors, role: roleColors, source: sourceColors },
    typography: { fontFamilies, fontSizes, fontWeights, lineHeights },
    spacing: spacingScale,
    borders: borderRadiusScale,
    shadows: shadowPresets,
  } as const;
}
