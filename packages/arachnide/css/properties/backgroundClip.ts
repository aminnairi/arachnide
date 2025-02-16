import { GlobalValue } from "./GlobalValue";

export type BackgroundClip =
  | "border-box"
  | "padding-box"
  | "content-box"
  | "text"
  | "border-area"
  | GlobalValue

export const backgroundClip = (value: BackgroundClip): BackgroundClip => value;