import { VirtualObjectElement } from "..";

export const cite = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "cite",
    attributes,
    children
  };
};
