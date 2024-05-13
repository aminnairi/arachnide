import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const meter = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLMeterElement>, "name">): VirtualObjectElement => {
  return element({
    name: "meter",
    attributes,
    content,
    reference
  });
};
