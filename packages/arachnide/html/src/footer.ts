import { VirtualObjectElement } from "@arachnide/core";

export const footer = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "footer",
    attributes,
    children,
    reference
  };
};
