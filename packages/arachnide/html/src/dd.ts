import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dd = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "dd"
  });
};
