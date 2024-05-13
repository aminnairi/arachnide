import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const sub = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "sub"
  });
};
