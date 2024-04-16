import { VirtualObjectElement } from "..";

export const figure = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "figure",
    attributes,
    children
  };
};
