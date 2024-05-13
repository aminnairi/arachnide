import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const meter = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLMeterElement>, "name">): VirtualObjectElement => {
  return element({
    name: "meter",
    attributes,
    children,
    reference
  });
};
