import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const samp = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "samp"
  });
};
