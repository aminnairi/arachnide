import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const picture = (options: Omit<CreateElementOptions<HTMLPictureElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "picture"
  });
};
