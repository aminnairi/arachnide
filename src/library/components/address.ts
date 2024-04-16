import { VirtualObjectElement } from "..";

export const address = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "address",
    attributes,
    children
  };
};
