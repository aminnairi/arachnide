import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ruby = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "ruby"
  });
};
