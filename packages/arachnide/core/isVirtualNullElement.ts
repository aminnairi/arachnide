import { VirtualElement } from "./types";

/**
 * Checks whether a data structure is null. This is really not a complicated
 * operation, but is used in many location of the source-code of the framework
 * so it becomes handy. You should not need this function, but you can use it
 * for your algorithms if you really want to.
 */
export const isVirtualNullElement = (virtualElement: VirtualElement): virtualElement is null => {
  return virtualElement === null;
};
