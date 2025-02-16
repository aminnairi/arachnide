import { GlobalValue } from "./GlobalValue";

export type BackgroundBlendModeValue =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity"
  | "plus-darker"
  | "plus-lighter"

export type BackgroundBlendMode =
  | BackgroundBlendModeValue
  | `${BackgroundBlendModeValue}, ${BackgroundBlendModeValue}`
  | `${BackgroundBlendModeValue}, ${BackgroundBlendModeValue}, ${BackgroundBlendModeValue}`
  | GlobalValue

export const backgroundBlendMode = (value: BackgroundBlendMode): BackgroundBlendMode => {
  return value;
}