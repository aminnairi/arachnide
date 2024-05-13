import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const q = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "q",
    attributes,
    children,
    reference
  });
};
