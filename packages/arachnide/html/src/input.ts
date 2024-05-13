import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const input = ({ attributes, reference }: Omit<CreateElementOptions<HTMLInputElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    name: "input",
    attributes,
    content: [],
    reference
  });
};
