import { VirtualObjectElement } from "@arachnide/core";

export const section = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "section",
    attributes,
    children,
    reference
  };
};
