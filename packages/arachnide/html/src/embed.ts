import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const embed = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLEmbedElement>, "name">): VirtualObjectElement => {
  return element({
    name: "embed",
    attributes,
    children,
    reference
  });
};
