import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const optgroup = (options: Omit<CreateElementOptions<HTMLOptGroupElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "optgroup"
  });
};
