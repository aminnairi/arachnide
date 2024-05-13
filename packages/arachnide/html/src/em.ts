import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const em = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "em",
    attributes,
    content,
    reference
  });
};
