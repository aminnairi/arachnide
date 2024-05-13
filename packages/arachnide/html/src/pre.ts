import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const pre = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLPreElement>, "name">): VirtualObjectElement => {
  return element({
    name: "pre",
    attributes,
    content,
    reference
  });
};
