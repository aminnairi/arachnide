import { VirtualObjectElement } from "..";

export const h4 = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "h4",
    attributes,
    children
  };
};
