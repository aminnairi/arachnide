import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const embed = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLEmbedElement>, "name">): VirtualObjectElement => {
  return element({
    name: "embed",
    attributes,
    content,
    reference
  });
};
