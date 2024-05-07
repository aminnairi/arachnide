import { VirtualObjectElement } from "@arachnide/core";

export const picture = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "picture",
    attributes,
    children
  };
};
