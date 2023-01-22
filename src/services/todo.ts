import { send } from "./http";

export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    return await send<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  } catch (error) {
    return [];
  }
};
