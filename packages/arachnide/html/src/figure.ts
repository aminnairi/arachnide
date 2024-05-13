import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const figure = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "figure"
  });
};
