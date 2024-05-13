import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const menu = (options: Omit<CreateElementOptions<HTMLMenuElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "menu"
  });
};
