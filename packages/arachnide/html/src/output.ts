import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const output = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLOutputElement>, "name">): VirtualObjectElement => {
  return element({
    name: "output",
    attributes,
    content,
    reference
  });
};
