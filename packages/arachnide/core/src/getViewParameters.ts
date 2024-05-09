import { removeTrailingLeadingSlashes } from "./removeTrailingLeadingSlashes";

export const getViewParameters = (viewPath: string, path: string) => {
  const normalizedViewPath = removeTrailingLeadingSlashes(viewPath);
  const normalizedPath = removeTrailingLeadingSlashes(path);

  const normalizedViewPathParts = normalizedViewPath.split(/\/+/);
  const normalizedPathParts = normalizedPath.split(/\/+/);

  if (normalizedPathParts.length !== normalizedViewPathParts.length) {
    return {};
  }

  const viewPathMatchesPath = normalizedViewPathParts.every((viewPathPart, index) => {
    if (viewPathPart.startsWith(":")) {
      return true;
    }

    const pathPart = normalizedPathParts[index];

    return viewPathPart === pathPart;
  });

  if (!viewPathMatchesPath) {
    return {};
  }

  return normalizedViewPathParts.reduce((parameters, viewPathPart, index) => {
    if (!viewPathPart.startsWith(":")) {
      return parameters;
    }

    const pathPart = normalizedPathParts[index];

    if (!pathPart) {
      return parameters;
    }

    return {
      ...parameters,
      [`${viewPathPart.slice(1)}`]: pathPart
    };
  }, {});
};
