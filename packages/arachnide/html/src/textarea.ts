import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const textarea = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLTextAreaElement>, "name">): VirtualObjectElement => {
  return element({
    name: "textarea",
    attributes,
    children,
    reference
  });
};
