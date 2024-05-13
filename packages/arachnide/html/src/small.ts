import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const small = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "small",
    attributes,
    content,
    reference
  });
};
