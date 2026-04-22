import { useState } from "react";

/**
 * useInput
 * Hook customizado para controle de campos de texto.
 * Encapsula o estado e os handlers de um input, evitando repetição de código.
 */
export function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => setValue(e.target.value);

  const clear = () => setValue("");

  const onKeyDown = (e, callback) => {
    if (e.key === "Enter") callback();
  };

  return { value, onChange, clear, onKeyDown };
}
