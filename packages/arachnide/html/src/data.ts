import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const data = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLDataElement>, "name">): VirtualObjectElement => {
  return element({
    name: "data",
    attributes,
    children,
    reference
  });
};
