import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const th = (options: Omit<CreateElementOptions<HTMLTableCellElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "th"
  });
};
