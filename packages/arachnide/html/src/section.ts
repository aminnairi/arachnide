import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const section = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "section",
    attributes,
    content,
    reference
  });
};
