import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const rp = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "rp"
  });
};
