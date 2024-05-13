import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const cite = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "cite",
    attributes,
    children,
    reference
  });
};
