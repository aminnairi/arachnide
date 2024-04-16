import { VirtualObjectElement } from "..";

export const h5 = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "h5",
    attributes,
    children
  };
};
