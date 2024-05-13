import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const pre = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLPreElement>, "name">): VirtualObjectElement => {
  return element({
    name: "pre",
    attributes,
    children,
    reference
  });
};
