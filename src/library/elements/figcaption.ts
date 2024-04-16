import { VirtualObjectElement } from "..";

export const figcaption = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "figcaption",
    attributes,
    children
  };
};
