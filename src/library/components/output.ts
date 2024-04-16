import { VirtualObjectElement } from "..";

export const output = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "output",
    attributes,
    children
  };
};
