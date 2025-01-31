export const styles = (styles: Record<string, string | number | undefined | null>): string | null => {
  const filteredStyles = Object.entries(styles).filter(([, value]) => {
    return value !== undefined && value !== null;
  });

  if (filteredStyles.length === 0) {
    return null;
  }

  return filteredStyles.map(([name, value]) => {
    const kebabCasedName = name.split(/(?=[A-Z])/g).map(nameSegment => {
      return nameSegment.toLowerCase();
    }).join("-");

    return `${kebabCasedName}: ${value}`;
  }).join(";");
};
