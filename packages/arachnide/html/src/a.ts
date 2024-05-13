import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const a = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLAnchorElement>, "name">): VirtualObjectElement => {
  return element({
    name: "a",
    attributes,
    content,
    reference
  });
};
