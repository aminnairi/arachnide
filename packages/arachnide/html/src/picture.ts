import { VirtualObjectElement } from "@arachnide/core";

export const picture = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "picture",
    attributes,
    children,
    reference
  };
};
