import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ol = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLOListElement>, "name">): VirtualObjectElement => {
  return element({
    name: "ol",
    attributes,
    children,
    reference
  });
};
