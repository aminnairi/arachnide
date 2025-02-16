export type AnimationDirection =
  | "normal"
  | "reverse"
  | "alternate"
  | "alternate-reverse"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset"

export const animationDirection = (value: AnimationDirection): AnimationDirection => value