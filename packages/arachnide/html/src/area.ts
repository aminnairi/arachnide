import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const area = ({ attributes, reference }: Omit<CreateElementOptions<HTMLAreaElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    name: "area",
    attributes,
    reference
  });
};
