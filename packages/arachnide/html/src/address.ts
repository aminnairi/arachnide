import { VirtualObjectElement } from "@arachnide/core";

export const address = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "address",
    attributes,
    children,
    reference
  };
};
