import { VirtualObjectElement } from "..";

export const col = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "col",
    attributes,
    children
  };
};
