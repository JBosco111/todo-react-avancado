import { useTodo } from "../context/TodoContext";
import { useInput } from "../hooks/useInput";

/**
 * TodoForm
 * Componente para adicionar novas tarefas.
 * Usa o hook customizado useInput para controlar o campo de texto.
 */
export function TodoForm() {
  const { addTodo } = useTodo();
  const { value, onChange, clear, onKeyDown } = useInput("");

  const handleAdd = () => {
    const text = value.trim();
    if (!text) return;
    addTodo(text);
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
