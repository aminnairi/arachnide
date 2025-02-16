import { GlobalValue } from "./GlobalValue";

export type BackgroundRepeatValue =
  | "repeat"
  | "repeat-x"
  | "repeat-y"
  | "space"
  | "round"
  | "no-repeat"

export type BackgroundRepeat =
  | BackgroundRepeatValue
  | `${BackgroundRepeatValue} ${BackgroundRepeatValue}`
  | GlobalValue

export const backgroundRepeat = (value: BackgroundRepeat) => {
  return value;
}