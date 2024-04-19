import { VirtualObjectElement } from "..";

export const bdo = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "bdo",
    attributes,
    children
  };
};
