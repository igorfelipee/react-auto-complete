export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    // Used as because pass the generic type to .json() is no longer available

    // If I could donwload an external library, I would use axios instead of fetch
    // because it has native response type support
    return response.json() as Promise<Todo[]>;
  } catch (error) {
    console.error(error);
    return [];
  }
};
