/**
 * useLocalStorage
 * Hook customizado para encapsular a lógica de persistência no localStorage.
 * Retorna funções `save` e `load` associadas a uma chave específica.
 */
export function useLocalStorage(key) {
  const save = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("useLocalStorage: erro ao salvar", err);
    }
  };

  const load = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (err) {
      console.error("useLocalStorage: erro ao carregar", err);
      return [];
    }
  };

  const clear = () => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error("useLocalStorage: erro ao limpar", err);
    }
  };

  return { save, load, clear };
}
