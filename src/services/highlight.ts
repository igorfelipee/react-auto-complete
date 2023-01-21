export const highlightText = (str: string, subStr: string): string =>
  str.replace(subStr, `<strong>${subStr}</strong>`);
