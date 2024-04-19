import { VirtualObjectElement } from "..";

export const source = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "source",
    attributes,
    children
  };
};
