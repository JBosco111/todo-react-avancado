# todo.app — versão Recoil

Evolução do projeto Todo List, migrando o gerenciamento de estado de **Context API + useReducer** para **Recoil**, com átomos, seletores e RecoilRoot.

## Tecnologias utilizadas

- **React 18**
- **Recoil 0.7** — gerenciamento de estado global
- **Vite** — bundler e servidor de desenvolvimento
- **localStorage** — persistência de dados

## Estrutura do projeto

```
src/
├── atoms/
│   ├── todosAtom.js              # Átomo: lista de tarefas
│   └── filterAtom.js             # Átomo: filtro ativo
├── selectors/
│   ├── filteredTodosSelector.js  # Seletor: lista filtrada (todosAtom + filterAtom)
│   └── todoStatsSelector.js      # Seletor: estatísticas (todosAtom)
├── hooks/
│   ├── useTodos.js               # Hook customizado: encapsula ações e leituras Recoil
│   └── useInput.js               # Hook customizado: controle de input
└── components/
    ├── TodoForm.jsx               # Adicionar tarefa
    ├── TodoList.jsx               # Lista — consome filteredTodosSelector
    ├── TodoItem.jsx               # Item — React.memo
    ├── TodoStats.jsx              # Stats — consome todoStatsSelector + React.memo
    └── TodoFilters.jsx            # Filtros — consome filterAtom + React.memo
```

## Conceitos Recoil aplicados

| Conceito | Arquivo | Descrição |
|---|---|---|
| RecoilRoot | main.jsx | Provedor global — envolve toda a aplicação |
| atom | todosAtom.js | Estado da lista de tarefas |
| atom | filterAtom.js | Estado do filtro ativo |
| selector | filteredTodosSelector.js | Deriva lista filtrada de dois átomos |
| selector | todoStatsSelector.js | Deriva estatísticas do todosAtom |
| useRecoilState | useTodos.js | Lê e escreve em um átomo |
| useRecoilValue | useTodos.js | Lê seletores (somente leitura) |

## Comparação com a versão Context API

| | Context API | Recoil |
|---|---|---|
| Provedor | TodoProvider manual | RecoilRoot automático |
| Estado | useReducer centralizado | Átomos independentes |
| Dados derivados | useMemo manual | selector declarativo |
| Re-renders | Controlado manualmente | Granular por átomo/seletor |
| Boilerplate | Médio | Baixo |

## Como rodar localmente

Pré-requisitos: Node.js 18+ e npm.

```bash
cd todo-app-recoil
npm install
npm run dev
```

Acesse http://localhost:5173.

## Validando o Recoil no DevTools

Instale a extensão Recoil DevTools no Chrome para inspecionar o estado dos átomos e seletores em tempo real. Os console.log nos componentes e seletores mostram quando cada peça é recalculada.
