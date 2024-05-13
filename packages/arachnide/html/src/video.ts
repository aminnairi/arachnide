import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const video = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLVideoElement>, "name">): VirtualObjectElement => {
  return element({
    name: "video",
    attributes,
    content,
    reference
  });
};
