import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const portal = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "portal"
  });
};
