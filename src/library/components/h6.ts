import { VirtualObjectElement } from "..";

export const h6 = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "h6",
    attributes,
    children
  };
};
