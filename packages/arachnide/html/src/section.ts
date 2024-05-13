import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const section = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "section",
    attributes,
    children,
    reference
  });
};
