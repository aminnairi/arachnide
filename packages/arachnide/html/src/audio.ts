import { CreateElementOptions, element } from "@arachnide/core";

export const audio = (options: Omit<CreateElementOptions<HTMLAudioElement>, "name">) => {
  return element({
    ...options,
    name: "audio"
  });
};
