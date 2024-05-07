import { VirtualObjectElement } from "@arachnide/core";

export const section = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "section",
    attributes,
    children
  };
};
