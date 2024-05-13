import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const code = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "code"
  });
};
