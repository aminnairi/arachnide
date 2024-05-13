import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const s = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "s"
  });
};
