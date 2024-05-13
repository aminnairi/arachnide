import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dd = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "dd",
    attributes,
    content,
    reference
  });
};
