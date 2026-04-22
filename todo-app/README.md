# todo.app

Aplicação de lista de tarefas desenvolvida com React, aplicando recursos avançados de performance e organização de código.

## Tecnologias utilizadas

- **React 18** — biblioteca principal
- **Vite** — bundler e servidor de desenvolvimento
- **Context API** — gerenciamento de estado global
- **useReducer** — controle de ações sobre o estado
- **useMemo / React.memo** — memoização e performance
- **localStorage** — persistência de dados no navegador

## Estrutura do projeto

```
src/
├── context/
│   └── TodoContext.jsx     # Context API + useReducer (estado global)
├── hooks/
│   ├── useLocalStorage.js  # Hook customizado: persistência
│   └── useInput.js         # Hook customizado: controle de input
├── components/
│   ├── TodoForm.jsx         # Formulário de nova tarefa
│   ├── TodoList.jsx         # Lista com useMemo para filtragem
│   ├── TodoItem.jsx         # Item individual com React.memo
│   ├── TodoStats.jsx        # Estatísticas com useMemo + React.memo
│   └── TodoFilters.jsx      # Filtros com React.memo
├── App.jsx
├── App.css
└── main.jsx
```

## Recursos aplicados

| Recurso | Onde | Por quê |
|---|---|---|
| `useState` | `useInput` hook | Controla o valor do campo de texto |
| `useReducer` | `TodoContext` | Gerencia ações (ADD, TOGGLE, REMOVE, SET_FILTER) |
| `useEffect` (via hook) | `useLocalStorage` | Persiste dados no localStorage |
| `useContext` | Todos os componentes | Acessa o estado global sem prop drilling |
| `useMemo` | `TodoList`, `TodoStats` | Evita recalcular lista filtrada e stats sem necessidade |
| `React.memo` | `TodoItem`, `TodoFilters`, `TodoStats` | Evita re-renderizar componentes sem mudança de props |
| Hook customizado | `useLocalStorage`, `useInput` | Encapsula lógica reutilizável |

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ e npm instalados.

```bash
# 1. Entre na pasta do projeto
cd todo-app

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Build para produção

```bash
npm run build
npm run preview
```

## Como validar as renderizações

Abra o **DevTools → Console** no navegador. Cada componente tem um `console.log` que indica quando é renderizado, permitindo visualizar o impacto do `React.memo` e `useMemo` em ação.
