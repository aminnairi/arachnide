import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const pre = (options: Omit<CreateElementOptions<HTMLPreElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "pre"
  });
};
