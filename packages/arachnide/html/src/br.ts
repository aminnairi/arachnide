import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const br = ({ attributes, reference }: Omit<CreateElementOptions<HTMLBRElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    name: "br",
    attributes,
    content: [],
    reference
  });
};
