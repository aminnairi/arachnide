import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const main = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "main"
  });
};
