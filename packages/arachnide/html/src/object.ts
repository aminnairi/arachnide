import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const object = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLObjectElement>, "name">): VirtualObjectElement => {
  return element({
    name: "object",
    attributes,
    children,
    reference
  });
};
