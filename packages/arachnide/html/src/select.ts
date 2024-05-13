import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const select = (options: Omit<CreateElementOptions<HTMLSelectElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "select"
  });
};
