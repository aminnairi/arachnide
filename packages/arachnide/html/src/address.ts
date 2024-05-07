import { VirtualObjectElement } from "@arachnide/core";

export const address = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "address",
    attributes,
    children
  };
};
