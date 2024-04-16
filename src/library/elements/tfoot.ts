import { VirtualObjectElement } from "..";

export const tfoot = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "tfoot",
    attributes,
    children
  };
};
