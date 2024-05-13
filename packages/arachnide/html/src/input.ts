import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const input = (options: Omit<CreateElementOptions<HTMLInputElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    ...options,
    name: "input",
    content: []
  });
};
