export const style = (styles: Record<string, string | number | undefined | null>): string | null => {
  const filteredStyles = Object.entries(styles).filter(([, value]) => {
    return value !== undefined && value !== null;
  });

  if (filteredStyles.length === 0) {
    return null;
  }

  return filteredStyles.map(([name, value]) => {
    return `${name}: ${value}`;
  }).join(";");
};
