import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dfn = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "dfn",
    attributes,
    content,
    reference
  });
};
