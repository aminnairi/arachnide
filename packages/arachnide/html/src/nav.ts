import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const nav = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "nav"
  });
};
