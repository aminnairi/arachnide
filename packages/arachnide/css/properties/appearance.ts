import { GlobalValue } from "./GlobalValue";

export type Appearance =
  | "none"
  | "auto"
  | "menulist-button"
  | "textfield"
  | "button"
  | "checkbox"
  | "listbox"
  | "menulist"
  | "meter"
  | "progress-bar"
  | "push-button"
  | "radio"
  | "searchfield"
  | "slider-horizontal"
  | "square-button"
  | "textarea"
  | GlobalValue

export const appearance = (value: Appearance): Appearance => value;