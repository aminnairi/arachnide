import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const input = ({ attributes, reference }: Omit<CreateElementOptions<HTMLInputElement>, "name" | "children">): VirtualObjectElement => {
  return element({
    name: "input",
    attributes,
    children: [],
    reference
  });
};
