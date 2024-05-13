import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dl = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "dl"
  });
};
