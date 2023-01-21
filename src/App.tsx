import React, { useState, useCallback, useEffect } from "react";
import AutoCompleteInput from "./components/auto-complete-input";
import { fetchTodos } from "./services/api";
import { highlightText } from "./services/highlight";
import "./index.css";

function App() {
  const [search, setSearch] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTodos();
      setTodos(response);
    };

    void fetchData();
  }, []);

  const onChangeSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.currentTarget.value);
    },
    [search]
  );

  const filterTodos = useCallback(() => {
    if (!search) return [];

    return todos.filter((todo) => todo.title.includes(search.toLowerCase()));
  }, [search]);

  const sanatizedTodos = useCallback(() => {
    const filteredTodos = filterTodos();

    if (filteredTodos.length === 0) return [];

    return filteredTodos.map((todo) => {
      return highlightText(todo.title, search);
    });
  }, [search]);

  return (
    <div className="app-wrapper">
      <AutoCompleteInput
        label="My Tasks"
        search={search}
        searchResults={sanatizedTodos()}
        onChangeHandler={onChangeSearch}
      />
    </div>
  );
}

export default App;
