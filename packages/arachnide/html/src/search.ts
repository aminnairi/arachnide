import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const search = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "search"
  });
};
