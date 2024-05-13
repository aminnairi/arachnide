import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const kbd = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "kbd"
  });
};
