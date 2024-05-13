import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const bdo = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "bdo",
    attributes,
    content,
    reference
  });
};
