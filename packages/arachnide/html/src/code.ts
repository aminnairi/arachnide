import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const code = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "code",
    attributes,
    content,
    reference
  });
};
