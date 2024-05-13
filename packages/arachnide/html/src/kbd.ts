import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const kbd = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "kbd",
    attributes,
    children,
    reference
  });
};
