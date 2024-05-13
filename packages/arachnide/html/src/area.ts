import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const area = (options: Omit<CreateElementOptions<HTMLAreaElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    ...options,
    name: "area",
    content: []
  });
};
