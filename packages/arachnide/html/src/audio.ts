import { CreateElementOptions, VirtualObjectElement, element } from "@arachnide/core";

export const audio = (options: Omit<CreateElementOptions<HTMLAudioElement>, "name">): VirtualObjectElement => {
  return element({
    ...options,
    name: "audio"
  });
};
