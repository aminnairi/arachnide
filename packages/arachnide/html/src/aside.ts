import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const aside = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "aside"
  });
};
