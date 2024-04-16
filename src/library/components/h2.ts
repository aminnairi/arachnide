import { VirtualObjectElement } from "..";

export const h2 = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "h2",
    attributes,
    children
  };
};
