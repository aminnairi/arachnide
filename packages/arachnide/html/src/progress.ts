import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const progress = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLProgressElement>, "name">): VirtualObjectElement => {
  return element({
    name: "progress",
    attributes,
    children,
    reference
  });
};
