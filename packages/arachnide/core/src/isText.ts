export const isText = (input: unknown): input is Text => {
  return input instanceof Text;
};
