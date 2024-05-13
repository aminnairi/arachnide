import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const wbr = (options: Omit<CreateElementOptions<HTMLElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    ...options,
    name: "wbr",
    content: []
  });
};
