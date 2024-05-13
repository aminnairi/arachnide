import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const article = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "article"
  });
};
