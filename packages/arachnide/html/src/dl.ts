import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dl = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "dl",
    attributes,
    content,
    reference
  });
};
