import { VirtualObjectElement } from "@arachnide/core";

export const datalist = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "datalist",
    attributes,
    children
  };
};
