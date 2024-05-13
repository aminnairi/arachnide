import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const small = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "small"
  });
};
