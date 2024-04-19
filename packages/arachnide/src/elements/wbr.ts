import { VirtualObjectElement } from "..";

export const wbr = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "wbr",
    attributes,
    children
  };
};
