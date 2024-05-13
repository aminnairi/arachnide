import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const img = ({ attributes, reference }: Omit<CreateElementOptions<HTMLImageElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    name: "img",
    attributes,
    content: [],
    reference
  });
};
