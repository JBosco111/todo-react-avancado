import { memo } from "react";
import { useTodos } from "../hooks/useTodos";

const FILTERS = [
  { key: "all", label: "todas" },
  { key: "pending", label: "pendentes" },
  { key: "done", label: "concluídas" },
];

/**
 * TodoFilters
 * Lê filterAtom via useTodos e chama setFilter para atualizar o átomo.
 * React.memo evita re-renderização quando apenas os todos mudam.
 */
export const TodoFilters = memo(function TodoFilters() {
  console.log("[TodoFilters] renderizando");

  const { filter, setFilter } = useTodos();

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
