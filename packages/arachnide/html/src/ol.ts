import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ol = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLOListElement>, "name">): VirtualObjectElement => {
  return element({
    name: "ol",
    attributes,
    content,
    reference
  });
};
