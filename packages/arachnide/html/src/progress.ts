import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const progress = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLProgressElement>, "name">): VirtualObjectElement => {
  return element({
    name: "progress",
    attributes,
    content,
    reference
  });
};
