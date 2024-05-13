import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const label = (options: Omit<CreateElementOptions<HTMLLabelElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "label"
  });
};
