import { CreateElementOptions, element } from "@arachnide/core";

export const track = (options: Omit<CreateElementOptions<HTMLTrackElement>, "name">) => {
  return element({
    ...options,
    name: "track"
  });
};
