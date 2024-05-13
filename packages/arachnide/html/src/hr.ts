import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const hr = ({ attributes, reference }: Omit<CreateElementOptions<HTMLHRElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    name: "hr",
    attributes,
    content: [],
    reference
  });
};
