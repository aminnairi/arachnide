import { VirtualObjectElement } from "..";

export const table = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "table",
    attributes,
    children
  };
};
