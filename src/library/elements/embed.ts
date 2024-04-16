import { VirtualObjectElement } from "..";

export const embed = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "embed",
    attributes,
    children
  };
};
