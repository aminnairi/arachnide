import { VirtualElement } from "./types";

export const isVirtualStringElement = (virtualElement: VirtualElement): virtualElement is string => {
  return typeof virtualElement === "string";
};
