import { VirtualObjectElement } from "..";

export const ul = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "ul",
    attributes,
    children
  };
};
