import { VirtualObjectElement } from "@arachnide/core";

export const code = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "code",
    attributes,
    children,
    reference
  };
};
