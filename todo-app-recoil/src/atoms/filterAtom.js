import { atom } from "recoil";

/**
 * filterAtom
 * Átomo que armazena o filtro ativo da lista.
 * Valores possíveis: "all" | "pending" | "done"
 *
 * Separado do todosAtom para que mudanças de filtro não
 * causem re-renderização em componentes que só consomem tarefas.
 */
export const filterAtom = atom({
  key: "filterAtom",
  default: "all",
});
