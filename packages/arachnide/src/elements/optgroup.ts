import { VirtualObjectElement } from "..";

export const optgroup = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "optgroup",
    attributes,
    children
  };
};
