import { VirtualObjectElement } from "..";

export const p = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "p",
    attributes,
    children
  };
};
