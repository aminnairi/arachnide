import { VirtualObjectElement } from "..";

export const rp = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "rp",
    attributes,
    children
  };
};
