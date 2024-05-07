import { VirtualObjectElement } from "@arachnide/core";

export const time = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "time",
    attributes,
    children
  };
};
