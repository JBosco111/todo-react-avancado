import { memo } from "react";

/**
 * TodoItem
 * React.memo: só re-renderiza se id, text ou done mudarem.
 * Recebe callbacks do pai para toggle e remove — sem acessar Recoil diretamente.
 */
export const TodoItem = memo(function TodoItem({ id, text, done, date, onToggle, onRemove }) {
  console.log(`[TodoItem] renderizando: "${text}"`);

  return (
    <div className={`todo-item ${done ? "done" : ""}`}>
      <div className="check-wrap" onClick={() => onToggle(id)}>
        <div className={`check-box ${done ? "checked" : ""}`}>
          {done && (
            <svg className="check-icon" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6l3 3 5-5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      <span className="todo-text">{text}</span>

      <span className={`tag ${done ? "tag-done" : "tag-pending"}`}>
        {done ? "feita" : "pendente"}
      </span>

      <span className="todo-date">{date}</span>

      <button
        className="btn-del"
        onClick={() => onRemove(id)}
        title="Remover tarefa"
        aria-label={`Remover "${text}"`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 2l10 10M12 2L2 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
});
