export type AnimationDelayTime = `${number}s` | `${number}ms`;

export type AnimationDelay =
  | AnimationDelayTime
  | `${AnimationDelayTime} ${AnimationDelayTime}`
  | `${AnimationDelayTime} ${AnimationDelayTime} ${AnimationDelayTime}`
  | `${AnimationDelayTime} ${AnimationDelayTime} ${AnimationDelayTime} ${AnimationDelayTime}`
  | `${AnimationDelayTime} ${AnimationDelayTime} ${AnimationDelayTime} ${AnimationDelayTime} ${AnimationDelayTime}`
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

export const animationDelay = (value: AnimationDelay): AnimationDelay => {
  return value;
};
