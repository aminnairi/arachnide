/**
 * This function will help you remove any slashes that might be located at the
 * beginning and/or the end of a string. For instance "/users/articles/". It
 * will remove them so that you get the following result: "users/articles".
 * This is used internally in the framework in order to normalize the paths for
 * searching a mtaching page for instance. Though you should not have any use
 * for this function, it is exposed just in case.
 */
export const removeTrailingLeadingSlashes = (text: string): string => {
  const match = /^\/?(.*?)\/?$/.exec(text);

  if (!match) {
    return text;
  }

  const output = match.at(1);

  return output ?? text;
};
