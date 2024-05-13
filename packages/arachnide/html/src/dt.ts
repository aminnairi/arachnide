import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dt = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "dt",
    attributes,
    content,
    reference
  });
};
