export type JustifyContentAlignment
  = "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "left"
  | "right"
  | "normal"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"

export type JustifyContentOverflow
  = `unsafe ${JustifyContentAlignment}`
  | `safe ${JustifyContentAlignment}`

export type JustifyContentGlobal
  = "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset"

export type JustifyContent
  = JustifyContentAlignment
  | JustifyContentOverflow
  | JustifyContentGlobal

export const justifyContent = (value: JustifyContent) => {
  return value;
};
