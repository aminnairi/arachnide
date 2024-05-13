import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const fieldset = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLFieldSetElement>, "name">): VirtualObjectElement => {
  return element({
    name: "fieldset",
    attributes,
    children,
    reference
  });
};
