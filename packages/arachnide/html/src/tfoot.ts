import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const tfoot = (options: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "tfoot"
  });
};
