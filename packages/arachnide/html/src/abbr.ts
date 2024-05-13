import { VirtualObjectElement, CreateElementOptions, element } from "@arachnide/core";

export const abbr = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "abbr",
    attributes,
    children,
    reference
  });
};
