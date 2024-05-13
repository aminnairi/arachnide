import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const summary = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "summary",
    attributes,
    children,
    reference
  });
};
