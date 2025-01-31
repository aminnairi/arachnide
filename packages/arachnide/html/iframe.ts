import { CreateElementOptions, element } from "@arachnide/core";

export const iframe = (options: Omit<CreateElementOptions<HTMLIFrameElement>, "name">) => {
  return element({
    ...options,
    name: "iframe"
  });
};
