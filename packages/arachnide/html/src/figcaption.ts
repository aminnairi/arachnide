import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const figcaption = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "figcaption"
  });
};
