import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const thead = (options: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "thead"
  });
};
