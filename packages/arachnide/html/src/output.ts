import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const output = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLOutputElement>, "name">): VirtualObjectElement => {
  return element({
    name: "output",
    attributes,
    children,
    reference
  });
};
