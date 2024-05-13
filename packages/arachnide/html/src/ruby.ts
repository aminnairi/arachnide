import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ruby = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "ruby",
    attributes,
    children,
    reference
  });
};
