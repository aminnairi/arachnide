import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const mark = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "mark",
    attributes,
    children,
    reference
  });
};
