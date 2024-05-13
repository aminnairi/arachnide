import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const caption = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "caption",
    attributes,
    children,
    reference
  });
};
