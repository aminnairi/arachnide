import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const strong = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "strong"
  });
};
