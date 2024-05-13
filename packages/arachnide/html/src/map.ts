import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const map = (options: Omit<CreateElementOptions<HTMLMapElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "map"
  });
};
