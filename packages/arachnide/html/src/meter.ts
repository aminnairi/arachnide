import { VirtualObjectElement } from "@arachnide/core";

export const meter = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "meter",
    attributes,
    children
  };
};
