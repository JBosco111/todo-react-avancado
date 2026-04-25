import { useTodos } from "../hooks/useTodos";
import { useInput } from "../hooks/useInput";

/**
 * TodoForm
 * Usa o hook customizado useInput para controlar o campo,
 * e useTodos (que internamente usa useSetRecoilState) para adicionar tarefas.
 */
export function TodoForm() {
  console.log("[TodoForm] renderizando");

  const { addTodo } = useTodos();
  const { value, onChange, clear, onKeyDown } = useInput("");

  const handleAdd = () => {
    if (!value.trim()) return;
    addTodo(value);
    clear();
  };

  return (
    <div className="card">
      <p className="section-label">nova tarefa</p>
      <div className="form-row">
        <input
          type="text"
          placeholder="O que precisa ser feito?"
          maxLength={80}
          value={value}
          onChange={onChange}
          onKeyDown={(e) => onKeyDown(e, handleAdd)}
          autoFocus
        />
        <button className="btn-add" onClick={handleAdd}>
          Adicionar
        </button>
      </div>
    </div>
  );
}
