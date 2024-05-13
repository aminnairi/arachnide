import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const embed = (options: Omit<CreateElementOptions<HTMLEmbedElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "embed"
  });
};
