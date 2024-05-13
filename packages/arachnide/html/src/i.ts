import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const i = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "i"
  });
};
