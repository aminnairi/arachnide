import { GlobalValue } from "./GlobalValue";

export type AlignmentBaseline =
  | "baseline"
  | "alphabetic"
  | "central"
  | "ideographic"
  | "mathematical"
  | "middle"
  | "text-bottom"
  | "text-top"
  | "text-before-edge"
  | "text-after-edge"
  | "auto"
  | "before-edge"
  | "after-edge"
  | "hanging"
  | GlobalValue

export const alignmentBaseline = (value: AlignmentBaseline): AlignmentBaseline => value;