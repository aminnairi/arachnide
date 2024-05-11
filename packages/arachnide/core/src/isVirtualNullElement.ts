import { VirtualElement } from "./types";

export const isVirtualNullElement = (virtualElement: VirtualElement): virtualElement is null => {
  return virtualElement === null;
};
