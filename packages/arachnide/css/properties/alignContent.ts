export type AlignContent
  = "normal"
  | "start"
  | "center"
  | "end"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "safe center"
  | "unsafe center"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset"

export const alignContent = (value: AlignContent) => {
  return value;
};
