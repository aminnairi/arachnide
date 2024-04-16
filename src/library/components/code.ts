import { VirtualObjectElement } from "..";

export const code = ({ attributes, children }: Omit<VirtualObjectElement, "name">): VirtualObjectElement => {
  return {
    name: "code",
    attributes,
    children
  };
};
