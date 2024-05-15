import { removeTrailingLeadingSlashes } from "./removeTrailingLeadingSlashes";

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
