import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const col = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "col"
  });
};
