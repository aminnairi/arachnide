import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const nav = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "nav",
    attributes,
    content,
    reference
  });
};
