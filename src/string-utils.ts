
export const removeWhiteSpace = (str: string) => {
  const whiteSpaceRegex = /\s/g;
  return str.replace(whiteSpaceRegex, "");
};
