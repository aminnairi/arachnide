import { VirtualObjectElement } from "..";

export const tr = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "tr",
    attributes,
    children
  };
};
