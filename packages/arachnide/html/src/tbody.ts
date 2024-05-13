import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const tbody = (options: Omit<CreateElementOptions<HTMLTableSectionElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "tbody"
  });
};
