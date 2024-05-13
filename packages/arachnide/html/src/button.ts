import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const button = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLButtonElement>, "name">): VirtualObjectElement => {
  return element({
    name: "button",
    attributes,
    children,
    reference
  });
};
