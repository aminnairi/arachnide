import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const time = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLTimeElement>, "name">): VirtualObjectElement => {
  return element({
    name: "time",
    attributes,
    content,
    reference
  });
};
