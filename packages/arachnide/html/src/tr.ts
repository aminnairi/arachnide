import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const tr = (options: Omit<CreateElementOptions<HTMLTableRowElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "tr"
  });
};
