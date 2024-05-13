import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const object = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLObjectElement>, "name">): VirtualObjectElement => {
  return element({
    name: "object",
    attributes,
    content,
    reference
  });
};
