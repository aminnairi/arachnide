import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const article = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "article",
    attributes,
    children,
    reference
  });
};
