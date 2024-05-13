import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const ol = (options: Omit<CreateElementOptions<HTMLOListElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "ol"
  });
};
