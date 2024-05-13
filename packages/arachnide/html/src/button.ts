import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const button = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLButtonElement>, "name">): VirtualObjectElement => {
  return element({
    name: "button",
    attributes,
    content,
    reference
  });
};
