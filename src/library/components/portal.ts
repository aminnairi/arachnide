import { VirtualObjectElement } from "..";

export const portal = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "portal",
    attributes,
    children
  };
};
