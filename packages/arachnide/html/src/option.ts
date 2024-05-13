import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const option = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLOptionElement>, "name">): VirtualObjectElement => {
  return element({
    name: "option",
    attributes,
    children,
    reference
  });
};
