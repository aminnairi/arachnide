import { VirtualObjectElement } from "@arachnide/core";

export const video = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "video",
    attributes,
    children,
    reference
  };
};
