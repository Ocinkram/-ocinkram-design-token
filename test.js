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
} from "./src/index.js";

import { COLORS as colorsFromSubpath } from "@ocinkram/design-token/colors";
import { STATUS_COLORS as statusFromSubpath } from "@ocinkram/design-token/status-colors";

const exports = {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  SHADOWS,
  BREAKPOINTS,
  Z_INDEX,
  STATUS_COLORS,
  COMPONENT_SIZES,
};

for (const [name, value] of Object.entries(exports)) {
  if (value === undefined || value === null) {
    throw new Error(`Export "${name}" is missing`);
  }
}

if (colorsFromSubpath.primary !== COLORS.primary) {
  throw new Error("Subpath export @ocinkram/design-token/colors failed");
}

if (statusFromSubpath.success !== STATUS_COLORS.success) {
  throw new Error("Subpath export @ocinkram/design-token/status-colors failed");
}

console.log("All exports verified:");
console.log(`  COLORS.primary = ${COLORS.primary}`);
console.log(`  TYPOGRAPHY.fontSize.md = ${TYPOGRAPHY.fontSize.md}`);
console.log(`  SPACING.md = ${SPACING.md}`);
console.log(`  RADIUS.md = ${RADIUS.md}`);
console.log(`  SHADOWS.md = ${SHADOWS.md}`);
console.log(`  BREAKPOINTS.md = ${BREAKPOINTS.md}`);
console.log(`  Z_INDEX.modal = ${Z_INDEX.modal}`);
console.log(`  STATUS_COLORS.success = ${STATUS_COLORS.success}`);
console.log(`  COMPONENT_SIZES.buttonHeight.md = ${COMPONENT_SIZES.buttonHeight.md}`);
