import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const area = ({ attributes, reference }: Omit<CreateElementOptions<HTMLAreaElement>, "name" | "children">): VirtualObjectElement => {
  return element({
    name: "area",
    attributes,
    reference
  });
};
