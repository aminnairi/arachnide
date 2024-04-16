import { VirtualObjectElement } from "..";

export const h1 = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "h1",
    attributes,
    children
  };
};
