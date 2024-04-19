import { VirtualObjectElement } from "..";

export const span = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "span",
    attributes,
    children
  };
};
