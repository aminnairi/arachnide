import { VirtualObjectElement } from "..";

export const label = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "label",
    attributes,
    children
  };
};
