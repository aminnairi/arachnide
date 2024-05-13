import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const br = ({ attributes, reference }: Omit<CreateElementOptions<HTMLBRElement>, "name" | "children">): VirtualObjectElement => {
  return element({
    name: "br",
    attributes,
    children: [],
    reference
  });
};
