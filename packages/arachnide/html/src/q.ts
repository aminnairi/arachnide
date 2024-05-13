import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const q = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "q"
  });
};
