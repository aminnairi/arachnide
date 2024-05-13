import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ins = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "ins",
    attributes,
    content,
    reference
  });
};
