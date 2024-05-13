import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const hr = (options: Omit<CreateElementOptions<HTMLHRElement>, "name" | "content">): VirtualObjectElement => {
  return element({
    ...options,
    name: "hr",
    content: []
  });
};
