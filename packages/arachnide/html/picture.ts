import { CreateElementOptions, element } from "@arachnide/core";

export const picture = (options: Omit<CreateElementOptions<HTMLPictureElement>, "name">) => {
  return element({
    ...options,
    name: "picture"
  });
};
