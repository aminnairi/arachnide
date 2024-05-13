import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const video = ({ attributes, children, reference }: Omit<CreateElementOptions<HTMLVideoElement>, "name">): VirtualObjectElement => {
  return element({
    name: "video",
    attributes,
    children,
    reference
  });
};
