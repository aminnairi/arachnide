import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const mark = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "mark",
    attributes,
    content,
    reference
  });
};
