import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h3 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "h3"
  });
};
