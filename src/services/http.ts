export const send = async <T extends unknown>(url: string): Promise<T> => {
  const response = await fetch(url);

  // Used as because pass the generic type to .json() is no longer available

  // If I could donwload an external library, I would use axios instead of fetch
  // because it has native response type support
  return response.json() as Promise<T>;
};
