import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const optgroup = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLOptGroupElement>, "name">): VirtualObjectElement => {
  return element({
    name: "optgroup",
    attributes,
    content,
    reference
  });
};
