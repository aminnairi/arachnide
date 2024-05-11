import { VirtualElement } from "./types";

export const isVirtualUndefinedElement = (virtualElement: VirtualElement): virtualElement is undefined => {
  return virtualElement === undefined;
};
