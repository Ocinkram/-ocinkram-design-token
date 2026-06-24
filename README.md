# @ocinkram/design-token

Shared design tokens for Ocinkram applications. Install this package in any repository to keep colors, typography, spacing, and other design values consistent across apps.

## What are design tokens?

Design tokens are named, reusable values that represent design decisions — colors, font sizes, spacing units, shadows, and similar primitives. Instead of hard-coding `#1565C0` in every project, you reference `COLORS.primary` from this package.

## Install

```bash
npm install @ocinkram/design-token
```

```bash
pnpm add @ocinkram/design-token
```

## Import tokens

Import everything from the main entry:

```js
import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
  BREAKPOINTS,
  Z_INDEX,
  STATUS_COLORS,
  COMPONENT_SIZES,
} from "@ocinkram/design-token";
```

Or import a single token file:

```js
import { COLORS } from "@ocinkram/design-token/colors";
import { TYPOGRAPHY } from "@ocinkram/design-token/typography";
import { SPACING } from "@ocinkram/design-token/spacing";
import { RADIUS } from "@ocinkram/design-token/radius";
import { SHADOWS } from "@ocinkram/design-token/shadows";
import { BREAKPOINTS } from "@ocinkram/design-token/breakpoints";
import { Z_INDEX } from "@ocinkram/design-token/zIndex";
import { STATUS_COLORS } from "@ocinkram/design-token/status-colors";
import { COMPONENT_SIZES } from "@ocinkram/design-token/component-sizes";
```

## Example: MUI `createTheme`

This package does not include MUI. Use tokens in your app to build a theme:

```js
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from "@ocinkram/design-token";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
      light: COLORS.primaryLight,
      dark: COLORS.primaryDark,
    },
    background: {
      default: COLORS.background,
      paper: COLORS.surface,
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
    },
  },
  typography: {
    fontFamily: TYPOGRAPHY.fontFamily.primary,
    fontSize: 14,
  },
  shape: {
    borderRadius: RADIUS.md,
  },
  spacing: SPACING.sm,
});
```

## Scope

This package provides **shared design values only** — not page-specific styles, layout rules, or UI components. Keep one-off or screen-specific styling in each application.

## Verify exports

```bash
npm test
```
