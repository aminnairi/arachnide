import { ApplicationEvent, Page } from "./types";
import { removeTrailingLeadingSlashes } from "./removeTrailingLeadingSlashes";

export const findPageFromPath = <GenericState, GenericEvent extends ApplicationEvent>(path: string, pages: Record<string, Page<GenericState, GenericEvent>>): [string, Page<GenericState, GenericEvent>] => {
  const pagesEntries = Object.entries(pages);

  const foundPageEntry = pagesEntries.find(([pagePath]) => {
    const normalizedPagePath = removeTrailingLeadingSlashes(pagePath);
    const normalizedPath = removeTrailingLeadingSlashes(path);

    const normalizedPagePathParts = normalizedPagePath.split(/\/+/);
    const normalizedPathParts = normalizedPath.split(/\/+/);

    if (normalizedPathParts.length !== normalizedPagePathParts.length) {
      return false;
    }

    return normalizedPagePathParts.every((pagePathPart, index) => {
      if (pagePathPart.startsWith(":")) {
        return true;
      }

      const pathPart = normalizedPathParts[index];

      return pagePathPart === pathPart;
    });
  });

  if (foundPageEntry) {
    return foundPageEntry;
  }

  return ["", () => null];
};
