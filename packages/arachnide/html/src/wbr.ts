import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const wbr = ({ attributes, reference }: Omit<CreateElementOptions<HTMLElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    name: "wbr",
    attributes,
    content: [],
    reference
  });
};
