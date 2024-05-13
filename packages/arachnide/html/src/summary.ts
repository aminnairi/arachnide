import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const summary = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "summary",
    attributes,
    content,
    reference
  });
};
