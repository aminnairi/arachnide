import { GlobalValue } from "./GlobalValue";

export type BackgroundAttachment =
  | "scroll"
  | "fixed"
  | "local"
  | GlobalValue

export const backgroundAttachment = (value: BackgroundAttachment) => {
  return value;
};