import { VirtualObjectElement } from "..";

export const legend = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "legend",
    attributes,
    children
  };
};
