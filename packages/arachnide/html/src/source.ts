import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const source = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLSourceElement>, "name">): VirtualObjectElement => {
  return element({
    name: "source",
    attributes,
    content,
    reference
  });
};
