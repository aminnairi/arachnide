import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h2 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "h2"
  });
};
