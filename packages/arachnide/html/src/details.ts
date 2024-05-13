import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const details = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLDetailsElement>, "name">): VirtualObjectElement => {
  return element({
    name: "details",
    attributes,
    content,
    reference
  });
};
