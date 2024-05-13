import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const sub = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "sub",
    attributes,
    content,
    reference
  });
};
