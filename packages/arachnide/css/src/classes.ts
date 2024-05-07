export const classes = (classes: Record<string, boolean>): string | null => {
  const filteredClasses = Object.entries(classes).filter(([, activated]) => {
    return activated;
  });

  if (filteredClasses.length === 0) {
    return null;
  }

  return filteredClasses.map(([name]) => {
    return name;
  }).join(" ");
};
