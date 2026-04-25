import { selector } from "recoil";
import { todosAtom } from "../atoms/todosAtom";
import { filterAtom } from "../atoms/filterAtom";

/**
 * filteredTodosSelector
 * Seletor derivado: combina todosAtom + filterAtom para retornar
 * apenas as tarefas correspondentes ao filtro ativo.
 *
 * O Recoil memoiza automaticamente este seletor — ele só é
 * recalculado quando todosAtom ou filterAtom mudam.
 */
export const filteredTodosSelector = selector({
  key: "filteredTodosSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const filter = get(filterAtom);

    console.log(`[filteredTodosSelector] recalculando com filtro: "${filter}"`);

    switch (filter) {
      case "done":
        return todos.filter((t) => t.done);
      case "pending":
        return todos.filter((t) => !t.done);
      default:
        return todos;
    }
  },
});
