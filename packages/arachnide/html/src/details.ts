import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const details = (options: Omit<CreateElementOptions<HTMLDetailsElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "details"
  });
};
