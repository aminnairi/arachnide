import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const textarea = (options: Omit<CreateElementOptions<HTMLTextAreaElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "textarea"
  });
};
