import { VirtualObjectElement } from "@arachnide/core";

export const audio = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "audio",
    attributes,
    children,
    reference
  };
};
