import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const td = (options: Omit<CreateElementOptions<HTMLTableCellElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "td"
  });
};
