import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ins = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "ins"
  });
};
