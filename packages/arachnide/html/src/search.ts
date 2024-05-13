import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const search = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "search",
    attributes,
    content,
    reference
  });
};
