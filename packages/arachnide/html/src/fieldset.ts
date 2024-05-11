import { VirtualObjectElement } from "@arachnide/core";

export const fieldset = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "fieldset",
    attributes,
    children,
    reference
  };
};
