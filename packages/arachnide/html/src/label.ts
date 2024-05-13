import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const label = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLLabelElement>, "name">): VirtualObjectElement => {
  return element({
    name: "label",
    attributes,
    content,
    reference
  });
};
