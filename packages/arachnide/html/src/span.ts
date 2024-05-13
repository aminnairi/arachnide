import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const span = (options: Omit<CreateElementOptions<HTMLSpanElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "span"
  });
};
