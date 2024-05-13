import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const iframe = (options: Omit<CreateElementOptions<HTMLIFrameElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "iframe"
  });
};
