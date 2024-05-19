import { CreateElementOptions, element } from "@arachnide/core";

export const video = (options: Omit<CreateElementOptions<HTMLVideoElement>, "name">) => {
  return element({
    ...options,
    name: "video"
  });
};
