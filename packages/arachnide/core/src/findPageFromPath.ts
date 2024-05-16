import { ApplicationEvent, Page } from "./types";
import { removeTrailingLeadingSlashes } from "./removeTrailingLeadingSlashes";

/**
 * This function can help you find a page based on a path (a route that you
 * define in the "pages" attribute of the "startApplicaton" function for
 * instance) and a list of pages. Though this function should not be of any
 * interest for you since the hard part of plugin in pages with the History Web
 * API is done for you thanks to this framework, you might want to get the same
 * algorithm for other use-cases as well, hence why this function is exposed
 * for you.
 */
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
