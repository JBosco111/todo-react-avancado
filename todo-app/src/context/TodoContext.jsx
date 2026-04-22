import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext(null);

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [
          {
            id: Date.now().toString(),
            text: action.payload,
            done: false,
            date: new Date().toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
            }),
          },
          ...state.todos,
        ],
      };
    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        ),
      };
    case "REMOVE":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const { load, save } = useLocalStorage("todos_rc");

  const [state, dispatch] = useReducer(todoReducer, {
    todos: load(),
    filter: "all",
  });

  // Persiste no localStorage sempre que os todos mudam
  const addTodo = (text) => {
    dispatch({ type: "ADD", payload: text });
    save([
      {
        id: Date.now().toString(),
        text,
        done: false,
        date: new Date().toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        }),
      },
      ...state.todos,
    ]);
  };

  const toggleTodo = (id) => {
    const updated = state.todos.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    dispatch({ type: "TOGGLE", payload: id });
    save(updated);
  };

  const removeTodo = (id) => {
    const updated = state.todos.filter((t) => t.id !== id);
    dispatch({ type: "REMOVE", payload: id });
    save(updated);
  };

  const setFilter = (filter) => dispatch({ type: "SET_FILTER", payload: filter });

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, filter: state.filter, addTodo, toggleTodo, removeTodo, setFilter }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("useTodo deve ser usado dentro de <TodoProvider>");
  return ctx;
}
