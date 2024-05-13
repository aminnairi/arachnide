import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const table = (options: Omit<CreateElementOptions<HTMLTableElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "table"
  });
};
