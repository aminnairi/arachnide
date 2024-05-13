import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const wbr = ({ attributes, reference }: Omit<CreateElementOptions<HTMLElement>, "name" | "children">): VirtualObjectElement => {
  return element({
    name: "wbr",
    attributes,
    children: [],
    reference
  });
};
