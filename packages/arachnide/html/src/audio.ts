import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const audio = ({ attributes, content, reference }: Omit<CreateElementOptions<HTMLAudioElement>, "name">): VirtualObjectElement => {
  return element({
    name: "audio",
    attributes,
    content,
    reference
  });
};
