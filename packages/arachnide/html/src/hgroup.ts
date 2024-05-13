import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const hgroup = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "hgroup"
  });
};
