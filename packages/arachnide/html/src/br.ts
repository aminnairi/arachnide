import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const br = (options: Omit<CreateElementOptions<HTMLBRElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    ...options,
    name: "br",
    content: []
  });
};
