import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const figure = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "figure",
    attributes,
    children,
    reference
  });
};
