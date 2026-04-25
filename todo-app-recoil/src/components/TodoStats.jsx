import { memo } from "react";
import { useTodos } from "../hooks/useTodos";

/**
 * TodoStats
 * Consome todoStatsSelector via useTodos.
 * Como todoStatsSelector depende apenas de todosAtom (não de filterAtom),
 * este componente NÃO re-renderiza ao trocar o filtro ativo.
 * React.memo reforça essa proteção.
 */
export const TodoStats = memo(function TodoStats() {
  console.log("[TodoStats] renderizando");

  const { stats } = useTodos();

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
