import { VirtualObjectElement } from "..";

export const data = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "data",
    attributes,
    children
  };
};
