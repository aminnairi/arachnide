import { VirtualObjectElement, CreateElementOptions, element } from "@arachnide/core";

export const abbr = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "abbr",
    attributes,
    content,
    reference
  });
};
