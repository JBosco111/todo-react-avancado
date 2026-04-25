import { atom } from "recoil";

/**
 * todosAtom
 * Átomo principal da aplicação.
 * Armazena a lista completa de tarefas.
 * Inicializado a partir do localStorage para persistência entre sessões.
 */
export const todosAtom = atom({
  key: "todosAtom",
  default: JSON.parse(localStorage.getItem("todos_recoil") || "[]"),
});
