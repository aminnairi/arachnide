import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const bdi = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "bdi",
    attributes,
    content,
    reference
  });
};
