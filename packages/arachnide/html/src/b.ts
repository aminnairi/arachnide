import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const b = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "b"
  });
};
