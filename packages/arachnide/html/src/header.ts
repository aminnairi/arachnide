import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const header = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "header"
  });
};
