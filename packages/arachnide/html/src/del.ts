import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const del = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "del"
  });
};
