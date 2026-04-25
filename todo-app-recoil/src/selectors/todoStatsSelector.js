import { selector } from "recoil";
import { todosAtom } from "../atoms/todosAtom";

/**
 * todoStatsSelector
 * Seletor derivado que calcula as estatísticas da lista.
 * Depende apenas de todosAtom — não re-executa ao trocar filtro.
 */
export const todoStatsSelector = selector({
  key: "todoStatsSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);

    console.log("[todoStatsSelector] recalculando estatísticas...");

    return {
      total: todos.length,
      done: todos.filter((t) => t.done).length,
      pending: todos.filter((t) => !t.done).length,
    };
  },
});
