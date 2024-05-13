import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const audio = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLAudioElement>, "name">): VirtualObjectElement => {
  return element({
    name: "audio",
    attributes,
    children,
    reference
  });
};
