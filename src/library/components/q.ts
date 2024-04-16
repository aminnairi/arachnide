import { VirtualObjectElement } from "..";

export const q = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "q",
    attributes,
    children
  };
};
