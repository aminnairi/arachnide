import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const caption = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "caption"
  });
};
