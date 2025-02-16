import { GlobalValue } from "./GlobalValue";

export type AspectRatioValue =
  | `${number}`
  | `${number} / ${number}`

export type AspectRatio =
  | AspectRatioValue
  | `auto ${AspectRatioValue}`
  | `${AspectRatioValue} auto`
  | GlobalValue

export const aspectRatio = (value: AspectRatio): AspectRatio => {
  return value;
};