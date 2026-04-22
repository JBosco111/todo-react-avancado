import { useMemo, memo } from "react";
import { useTodo } from "../context/TodoContext";

/**
 * TodoStats
 * Usa useMemo para calcular as estatísticas apenas quando `todos` mudar.
 * Wrapped com React.memo para evitar re-render quando o filtro muda.
 */
export const TodoStats = memo(function TodoStats() {
  console.log("[TodoStats] renderizando");

  const { todos } = useTodo();

  const stats = useMemo(() => ({
    total: todos.length,
    done: todos.filter((t) => t.done).length,
    pending: todos.filter((t) => !t.done).length,
  }), [todos]);

  return (
    <div className="stats">
      <div className="stat">
        <div className="stat-val">{stats.total}</div>
        <div className="stat-lbl">total</div>
      </div>
      <div className="stat">
        <div className="stat-val">{stats.pending}</div>
        <div className="stat-lbl">pendentes</div>
      </div>
      <div className="stat">
        <div className="stat-val">{stats.done}</div>
        <div className="stat-lbl">concluídas</div>
      </div>
    </div>
  );
});
