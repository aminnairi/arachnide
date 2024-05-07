export type DisplayOutside 
  = "block"
  | "inline"
  | "run-in"

export type DisplayInside
  = "flow"
  | "flow-root"
  | "table"
  | "flex"
  | "grid"
  | "ruby"

export type DisplayListItem = "list-item"

export type DisplayInternal
  = "table-row-group"
  | "table-header-group"
  | "table-footer-group"
  | "table-row"
  | "table-cell"
  | "table-column-group"
  | "table-column"
  | "table-caption"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-container"
  | "ruby-text-container"

export type DisplayBox
  = "contents"
  | "none"

export type DisplayLegacy
  = "inline-block"
  | "inline-table"
  | "inline-flex"
  | "inline-grid"

export type DisplayGlobal
  = "inherit"
  | "initial"
  | "unset"

export type Display
  = DisplayOutside
  | DisplayInside
  | DisplayListItem
  | DisplayInternal
  | DisplayBox
  | DisplayLegacy
  | DisplayGlobal

export const display = (value: Display) => {
  return value;
};
