import { useMemo } from "react";
import { useTodo } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

const EMPTY_MESSAGES = {
  all: { title: "Nenhuma tarefa ainda", sub: "Adicione algo acima para começar." },
  pending: { title: "Tudo em dia!", sub: "Sem tarefas pendentes." },
  done: { title: "Nada concluído ainda", sub: "Complete alguma tarefa primeiro." },
};

/**
 * TodoList
 * Usa useMemo para calcular a lista filtrada apenas quando
 * `todos` ou `filter` mudarem — evita recalcular em toda re-renderização.
 */
export function TodoList() {
  console.log("[TodoList] renderizando");

  const { todos, filter, toggleTodo, removeTodo } = useTodo();

  const filteredTodos = useMemo(() => {
    console.log("[useMemo] recalculando lista filtrada...");
    return todos.filter((t) => {
      if (filter === "done") return t.done;
      if (filter === "pending") return !t.done;
      return true;
    });
  }, [todos, filter]);

  if (filteredTodos.length === 0) {
    const { title, sub } = EMPTY_MESSAGES[filter];
    return (
      <div className="empty">
        <div className="empty-icon">✓</div>
        <p style={{ fontWeight: 500, marginBottom: 4 }}>{title}</p>
        <p>{sub}</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      ))}
    </div>
  );
}
