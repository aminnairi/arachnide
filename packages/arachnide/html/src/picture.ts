import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const picture = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLPictureElement>, "name">): VirtualObjectElement => {
  return element({
    name: "picture",
    attributes,
    content,
    reference
  });
};
