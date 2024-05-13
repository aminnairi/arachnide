import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const portal = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "portal",
    attributes,
    content,
    reference
  });
};
