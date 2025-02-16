export type AlignItemsAlignment =
  | "normal"
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "self-start"
  | "self-end"

export type AlignItems =
  | AlignItemsAlignment
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "anchor-center"
  | `safe ${AlignItemsAlignment}`
  | `unsafe ${AlignItemsAlignment}`
  | "flex-start"
  | "flex-end"

export const alignItems = (value: AlignItems): AlignItems => value;