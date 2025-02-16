export type BackgroundOrigin =
  | "border-box"
  | "padding-box"
  | "content-box"

export const backgroundOrigin = (value: BackgroundOrigin): BackgroundOrigin => value;