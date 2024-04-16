import { VirtualObjectElement } from "..";

export const s = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "s",
    attributes,
    children
  };
};
