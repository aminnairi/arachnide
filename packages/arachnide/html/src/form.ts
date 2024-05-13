import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const form = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLFormElement>, "name">): VirtualObjectElement => {
  return element({
    name: "form",
    attributes,
    children,
    reference
  });
};
