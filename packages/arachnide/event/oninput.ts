export const oninput = (callback: (value: string, event: Event) => void) => {
  return (event: Event) => {
    if (event.target instanceof HTMLInputElement && typeof event.target.value) {
      callback(event.target.value, event);
    }
  };
};
