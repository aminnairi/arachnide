import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const img = (options: Omit<CreateElementOptions<HTMLImageElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    ...options,
    name: "img",
    content: []
  });
};
