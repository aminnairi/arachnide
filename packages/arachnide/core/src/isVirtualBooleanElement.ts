import { VirtualElement } from "./types";

export const isVirtualBooleanElement = (virtualElement: VirtualElement): virtualElement is boolean => {
  return typeof virtualElement === "boolean";
};
