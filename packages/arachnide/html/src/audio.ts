import { VirtualObjectElement } from "@arachnide/core";

export const audio = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "audio",
    attributes,
    children
  };
};
