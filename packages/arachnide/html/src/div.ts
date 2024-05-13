import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const div = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLDivElement>, "name">): VirtualObjectElement => {
  return element({
    name: "div",
    attributes,
    children,
    reference
  });
};
