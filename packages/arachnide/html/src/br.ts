import { VirtualObjectElement } from "@arachnide/core";

export const br = ({ attributes, reference }: Omit<VirtualObjectElement, "name" | "children">): VirtualObjectElement => {
  return {
    name: "br",
    attributes,
    children: [],
    reference
  };
};
