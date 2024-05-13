import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const h6 = (options: Omit<CreateElementOptions<HTMLHeadingElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "h6"
  });
};
