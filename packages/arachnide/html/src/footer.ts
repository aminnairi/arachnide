import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const footer = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "footer"
  });
};
