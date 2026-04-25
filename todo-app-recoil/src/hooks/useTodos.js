import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todosAtom } from "../atoms/todosAtom";
import { filterAtom } from "../atoms/filterAtom";
import { filteredTodosSelector } from "../selectors/filteredTodosSelector";
import { todoStatsSelector } from "../selectors/todoStatsSelector";

const STORAGE_KEY = "todos_recoil";

/**
 * useTodos
 * Hook customizado que encapsula toda a lógica de manipulação de tarefas.
 * Os componentes não precisam conhecer os átomos/seletores diretamente —
 * apenas consomem este hook, mantendo o código desacoplado.
 */
export function useTodos() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);
  const filteredTodos = useRecoilValue(filteredTodosSelector);
  const stats = useRecoilValue(todoStatsSelector);

  const persist = (updated) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text: text.trim(),
      done: false,
      date: new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      }),
    };
    const updated = [newTodo, ...todos];
    setTodos(updated);
    persist(updated);
  };

  const toggleTodo = (id) => {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTodos(updated);
    persist(updated);
  };

  const removeTodo = (id) => {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
    persist(updated);
  };

  return {
    todos,
    filteredTodos,
    filter,
    stats,
    addTodo,
    toggleTodo,
    removeTodo,
    setFilter,
  };
}
