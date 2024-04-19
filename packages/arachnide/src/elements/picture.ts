import { VirtualObjectElement } from "..";

export const picture = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "picture",
    attributes,
    children
  };
};
