import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const iframe = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLIFrameElement>, "name">): VirtualObjectElement => {
  return element({
    name: "iframe",
    attributes,
    content,
    reference
  });
};
