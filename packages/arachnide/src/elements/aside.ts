import { VirtualObjectElement } from "..";

export const aside = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "aside",
    attributes,
    children
  };
};
