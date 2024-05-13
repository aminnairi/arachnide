import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const i = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "i",
    attributes,
    content,
    reference
  });
};
