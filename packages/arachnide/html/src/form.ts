import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const form = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLFormElement>, "name">): VirtualObjectElement => {
  return element({
    name: "form",
    attributes,
    content,
    reference
  });
};
