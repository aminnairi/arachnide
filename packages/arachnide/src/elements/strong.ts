import { VirtualObjectElement } from "..";

export const strong = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "strong",
    attributes,
    children
  };
};
