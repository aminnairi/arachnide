import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const dfn = (options: Omit<CreateElementOptions<HTMLElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "dfn"
  });
};
