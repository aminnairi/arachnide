import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const em = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "em"
  });
};
