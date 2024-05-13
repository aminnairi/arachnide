import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const data = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLDataElement>, "name">): VirtualObjectElement => {
  return element({
    name: "data",
    attributes,
    content,
    reference
  });
};
