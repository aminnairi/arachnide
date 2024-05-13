import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const source = (options: Omit<CreateElementOptions<HTMLSourceElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "source"
  });
};
