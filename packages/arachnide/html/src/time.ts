import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const time = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLTimeElement>, "name">): VirtualObjectElement => {
  return element({
    name: "time",
    attributes,
    children,
    reference
  });
};
