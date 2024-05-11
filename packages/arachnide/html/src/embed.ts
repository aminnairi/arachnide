import { VirtualObjectElement } from "@arachnide/core";

export const embed = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "embed",
    attributes,
    children,
    reference
  };
};
