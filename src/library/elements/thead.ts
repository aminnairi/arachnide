import { VirtualObjectElement } from "..";

export const thead = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "thead",
    attributes,
    children
  };
};
