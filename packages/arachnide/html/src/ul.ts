import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ul = (options: Omit<CreateElementOptions<HTMLUListElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "ul"
  });
};
