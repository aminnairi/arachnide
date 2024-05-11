import { VirtualElement } from "./types";

export const isVirtualNumberElement = (virtualElement: VirtualElement): virtualElement is number => {
  return typeof virtualElement === "number";
};
