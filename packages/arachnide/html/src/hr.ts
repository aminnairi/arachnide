import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const hr = ({ attributes, reference }: Omit<CreateElementOptions<HTMLHRElement>, "name" | "children">): VirtualObjectElement => {
  return element({
    name: "hr",
    attributes,
    children: [],
    reference
  });
};
