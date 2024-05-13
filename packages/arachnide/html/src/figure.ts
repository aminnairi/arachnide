import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const figure = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "figure",
    attributes,
    content,
    reference
  });
};
