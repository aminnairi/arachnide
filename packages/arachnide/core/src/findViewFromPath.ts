import { View } from "./types";
import { removeTrailingLeadingSlashes } from "./removeTrailingLeadingSlashes";

export const findViewFromPath = <ApplicationState, ApplicationEvent>(path: string, views: Record<string, View<ApplicationState, ApplicationEvent>>): View<ApplicationState, ApplicationEvent> => {
  const viewsEntries = Object.entries(views);

  const foundViewEntry = viewsEntries.find(([viewPath]) => {
    return removeTrailingLeadingSlashes(viewPath) === removeTrailingLeadingSlashes(path);
  });

  if (foundViewEntry) {
    return foundViewEntry[1];
  }

  return () => null;
};
