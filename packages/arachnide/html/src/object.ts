import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const object = (options: Omit<CreateElementOptions<HTMLObjectElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "object"
  });
};
