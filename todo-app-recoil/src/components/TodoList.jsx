import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

const EMPTY_MESSAGES = {
  all: { title: "Nenhuma tarefa ainda", sub: "Adicione algo acima para começar." },
  pending: { title: "Tudo em dia!", sub: "Sem tarefas pendentes." },
  done: { title: "Nada concluído ainda", sub: "Complete alguma tarefa primeiro." },
};

/**
 * TodoList
 * Consome filteredTodosSelector via useTodos —
 * o Recoil já memoiza o seletor, então a lista só é recalculada
 * quando todosAtom ou filterAtom realmente mudam.
 */
export function TodoList() {
  console.log("[TodoList] renderizando");

  const { filteredTodos, filter, toggleTodo, removeTodo } = useTodos();

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
