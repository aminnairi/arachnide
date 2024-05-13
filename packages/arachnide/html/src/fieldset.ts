import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const fieldset = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLFieldSetElement>, "name">): VirtualObjectElement => {
  return element({
    name: "fieldset",
    attributes,
    content,
    reference
  });
};
