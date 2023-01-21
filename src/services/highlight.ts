export const highlightText = (str: string, subStr: string): string => {
  const match = new RegExp(subStr, "gi");

  return str.replace(
    match,
    `<strong class="autocomplete__result-item--highlighted">${subStr.toLowerCase()}</strong>`
  );
};
