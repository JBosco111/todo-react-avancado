import { memo } from "react";
import { useTodo } from "../context/TodoContext";

const FILTERS = [
  { key: "all", label: "todas" },
  { key: "pending", label: "pendentes" },
  { key: "done", label: "concluídas" },
];

/**
 * TodoFilters
 * Wrapped com React.memo para evitar re-renderizações quando o filtro não muda.
 */
export const TodoFilters = memo(function TodoFilters() {
  console.log("[TodoFilters] renderizando");

  const { filter, setFilter } = useTodo();

  return (
    <div className="filters">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          className={`filter-btn ${filter === f.key ? "active" : ""}`}
          onClick={() => setFilter(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
});
