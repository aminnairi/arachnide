import { VirtualObjectElement } from "@arachnide/core";

export const img = ({ attributes, reference }: Omit<VirtualObjectElement, "name" | "children">): VirtualObjectElement => {
  return {
    name: "img",
    attributes,
    children: [],
    reference
  };
};
