import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const map = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLMapElement>, "name">): VirtualObjectElement => {
  return element({
    name: "map",
    attributes,
    content,
    reference
  });
};
