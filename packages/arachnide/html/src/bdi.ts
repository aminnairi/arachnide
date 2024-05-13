import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const bdi = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "bdi"
  });
};
