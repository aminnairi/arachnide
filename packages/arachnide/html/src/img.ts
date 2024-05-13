import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const img = ({ attributes, reference }: Omit<CreateElementOptions<HTMLImageElement>, "name" | "children">): VirtualObjectElement => {
  return element({
    name: "img",
    attributes,
    children: [],
    reference
  });
};
