import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const picture = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLPictureElement>, "name">): VirtualObjectElement => {
  return element({
    name: "picture",
    attributes,
    children,
    reference
  });
};
