export const removeTrailingLeadingSlashes = (text: string): string => {
  const match = /^\/?(.*?)\/?$/.exec(text);

  if (!match) {
    return text;
  }

  const output = match.at(0);

  return output ?? text;
};
