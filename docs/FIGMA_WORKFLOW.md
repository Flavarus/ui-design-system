# Figma Design System Workflow

## Overview

Code is the source of truth. The design system lives in TypeScript (`@manda/ui-design-system`) and is pushed to Figma for visual presentation via the Figma MCP plugin.

## Sync Direction

```
Code (TypeScript tokens) → design-tokens.json → Figma MCP → Figma File
```

For designer-initiated changes, Figma is read back and discrepancies are flagged for human review.

## Tools

| Figma MCP Tool | Purpose |
|---------------|---------|
| `create_design_system_rules` | Push tokens as Figma variables |
| `generate_figma_design` | Create visual presentation pages |
| `get_variable_defs` | Verify sync / detect drift |
| `add_code_connect_map` | Link Figma components to code |
| `get_code_connect_suggestions` | Find unmapped components |

## Workflow: Push to Figma

1. Export `design-tokens.json` from the package
2. Invoke `figma-design-system-sync` skill
3. The skill calls `create_design_system_rules` with token data
4. The skill calls `generate_figma_design` to create/update visual pages
5. The skill calls `get_variable_defs` to verify

## Workflow: Check for Drift

1. Call `get_variable_defs` to read Figma's current state
2. Compare with `design-tokens.json`
3. Report: matched, drifted, missing in Figma, extra in Figma
4. If drifted: the `design-system-manager` agent reviews and decides which direction to resolve

## Figma File Structure

The design system Figma file should contain:

1. **Brand Overview** — Logo, brand colors, typography specimens
2. **Theme Preset Pages** (5) — Each showing palette, sample cards, buttons, inputs
3. **Component Library** — Core MUI components in default preset
4. **Spacing & Grid** — 8px grid visualization, token scale
5. **Accessibility** — Contrast demos, touch target sizing

## Token Export Format

`design-tokens.json` follows the W3C Design Tokens Community Group format:

```json
{
  "color": {
    "primary": { "$value": "#3054E7", "$type": "color" }
  },
  "spacing": {
    "sm": { "$value": "8px", "$type": "dimension" }
  },
  "typography": {
    "heading-1": {
      "$value": { "fontFamily": "Inter", "fontSize": "32px", "fontWeight": 600 },
      "$type": "typography"
    }
  }
}
```
