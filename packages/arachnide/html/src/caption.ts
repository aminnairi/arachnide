import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const caption = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "caption",
    attributes,
    content,
    reference
  });
};
