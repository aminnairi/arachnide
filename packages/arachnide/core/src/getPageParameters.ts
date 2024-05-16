import { removeTrailingLeadingSlashes } from "./removeTrailingLeadingSlashes";

/**
 * This function will help you get the route parameters of a URL from a given
 * route, for instance for the route "/users/:user" and a URL "/users/123" it
 * will return an object with a property "user" with the value 123. Though this
 * is already done for you in this framework through the "parameters" property
 * of any pages, you might still want to use it for your own algorithms, hence
 * why this is exposed. But you should not need this function in most cases.
 */
export const getPageParameters = (pagePath: string, path: string) => {
  const normalizedPagePath = removeTrailingLeadingSlashes(pagePath);
  const normalizedPath = removeTrailingLeadingSlashes(path);

  const normalizedPagePathParts = normalizedPagePath.split(/\/+/);
  const normalizedPathParts = normalizedPath.split(/\/+/);

  if (normalizedPathParts.length !== normalizedPagePathParts.length) {
    return {};
  }

  const pagePathMatchesPath = normalizedPagePathParts.every((pagePathPart, index) => {
    if (pagePathPart.startsWith(":")) {
      return true;
    }

    const pathPart = normalizedPathParts[index];

    return pagePathPart === pathPart;
  });

  if (!pagePathMatchesPath) {
    return {};
  }

  return normalizedPagePathParts.reduce((parameters, pagePathPart, index) => {
    if (!pagePathPart.startsWith(":")) {
      return parameters;
    }

    const pathPart = normalizedPathParts[index];

    if (!pathPart) {
      return parameters;
    }

    return {
      ...parameters,
      [`${pagePathPart.slice(1)}`]: pathPart
    };
  }, {});
};
