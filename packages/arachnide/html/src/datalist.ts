import { VirtualObjectElement } from "@arachnide/core";

export const datalist = ({ attributes, children, reference }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "datalist",
    attributes,
    children,
    reference
  };
};
