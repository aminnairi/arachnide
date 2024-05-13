import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const blockquote = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "blockquote",
    attributes,
    children,
    reference
  });
};
