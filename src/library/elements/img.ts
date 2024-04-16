import { VirtualObjectElement } from "..";

export const img = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "img",
    attributes,
    children
  };
};
