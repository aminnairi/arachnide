import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const address = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "address",
    attributes,
    content,
    reference
  });
};
