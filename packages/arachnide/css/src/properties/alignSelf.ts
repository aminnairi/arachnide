export type AlignSelf
  = "auto"
  | "normal"
  | "center"
  | "start"
  | "end"
  | "self-start"
  | "self-end"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "stretch"
  | "safe center"
  | "unsafe center"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset"

export const alignSelf = (value: AlignSelf) => {
  return value;
};
