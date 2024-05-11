import { VirtualObjectElement } from "@arachnide/core";

export const th = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "th",
    attributes,
    children,
    reference
  };
};
