import { VirtualObjectElement } from "@arachnide/core";

export const rt = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "rt",
    attributes,
    children
  };
};
