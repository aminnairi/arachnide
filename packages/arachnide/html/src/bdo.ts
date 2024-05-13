import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const bdo = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "bdo"
  });
};
