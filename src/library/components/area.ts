import { VirtualObjectElement } from "..";

export const area = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "area",
    attributes,
    children
  };
};
