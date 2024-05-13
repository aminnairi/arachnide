import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const option = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLOptionElement>, "name">): VirtualObjectElement => {
  return element({
    name: "option",
    attributes,
    content,
    reference
  });
};
