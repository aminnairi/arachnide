import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const colgroup = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "colgroup"
  });
};
