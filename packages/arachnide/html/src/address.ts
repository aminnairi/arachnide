import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const address = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "address"
  });
};
