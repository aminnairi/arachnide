import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const main = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "main",
    attributes,
    content,
    reference
  });
};
