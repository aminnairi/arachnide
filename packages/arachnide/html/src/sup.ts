import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const sup = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "sup",
    attributes,
    content,
    reference
  });
};
