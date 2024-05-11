import { VirtualObjectElement } from "@arachnide/core";

export const area = ({ attributes, reference }: Omit<VirtualObjectElement, "name" | "children">): VirtualObjectElement => {
  return {
    name: "area",
    attributes,
    children: [],
    reference
  };
};
