import { VirtualObjectElement } from "..";

export const del = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "del",
    attributes,
    children
  };
};
