import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const cite = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "cite"
  });
};
