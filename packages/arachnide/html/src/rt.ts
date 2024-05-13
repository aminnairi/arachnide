import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const rt = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    name: "rt",
    attributes,
    children,
    reference
  });
};
