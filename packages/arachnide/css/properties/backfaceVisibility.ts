import { GlobalValue } from "./GlobalValue"

export type BackfaceVisibility =
  | "visible"
  | "hidden"
  | GlobalValue

export const backfaceVisibility = (value: BackfaceVisibility) => {
  return value;
}