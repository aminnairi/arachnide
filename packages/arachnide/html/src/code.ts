import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const code = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "code",
    attributes,
    children,
    reference
  });
};
