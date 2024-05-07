import { VirtualObjectElement } from "@arachnide/core";

export const fieldset = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "fieldset",
    attributes,
    children
  };
};
