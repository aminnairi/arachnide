import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const map = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLMapElement>, "name">): VirtualObjectElement => {
  return element({
    name: "map",
    attributes,
    children,
    reference
  });
};
