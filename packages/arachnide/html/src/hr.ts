import { VirtualObjectElement } from "@arachnide/core";

export const hr = ({ attributes, reference }: Omit<VirtualObjectElement, "name" | "children">): VirtualObjectElement => {
  return {
    name: "hr",
    attributes,
    children: [],
    reference
  };
};
