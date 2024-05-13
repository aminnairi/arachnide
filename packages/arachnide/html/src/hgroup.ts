import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const hgroup = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "hgroup",
    attributes,
    content,
    reference
  });
};
