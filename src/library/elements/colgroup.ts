import { VirtualObjectElement } from "..";

export const colgroup = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "colgroup",
    attributes,
    children
  };
};
