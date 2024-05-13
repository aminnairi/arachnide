import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const video = (options: Omit<CreateElementOptions<HTMLVideoElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "video"
  });
};
