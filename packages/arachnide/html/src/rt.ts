import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const rt = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "rt",
    attributes,
    content,
    reference
  });
};
