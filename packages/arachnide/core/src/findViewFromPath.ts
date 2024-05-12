import { ApplicationEvent, View } from "./types";
import { removeTrailingLeadingSlashes } from "./removeTrailingLeadingSlashes";

export const findViewFromPath = <GenericState, GenericEvent extends ApplicationEvent>(path: string, views: Record<string, View<GenericState, GenericEvent>>): [string, View<GenericState, GenericEvent>] => {
  const viewsEntries = Object.entries(views);

  const foundViewEntry = viewsEntries.find(([viewPath]) => {
    const normalizedViewPath = removeTrailingLeadingSlashes(viewPath);
    const normalizedPath = removeTrailingLeadingSlashes(path);

    const normalizedViewPathParts = normalizedViewPath.split(/\/+/);
    const normalizedPathParts = normalizedPath.split(/\/+/);

    if (normalizedPathParts.length !== normalizedViewPathParts.length) {
      return false;
    }

    return normalizedViewPathParts.every((viewPathPart, index) => {
      if (viewPathPart.startsWith(":")) {
        return true;
      }

      const pathPart = normalizedPathParts[index];

      return viewPathPart === pathPart;
    });
  });

  if (foundViewEntry) {
    return foundViewEntry;
  }

  return ["", () => null];
};
