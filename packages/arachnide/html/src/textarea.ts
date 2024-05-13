import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const textarea = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLTextAreaElement>, "name">): VirtualObjectElement => {
  return element({
    name: "textarea",
    attributes,
    content,
    reference
  });
};
