import { TodoForm } from "./components/TodoForm";
import { TodoFilters } from "./components/TodoFilters";
import { TodoList } from "./components/TodoList";
import { TodoStats } from "./components/TodoStats";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>
            todo<span className="accent">.</span>app
          </h1>
          <p>Recoil · Átomos · Seletores · RecoilRoot</p>
        </header>

        <TodoForm />
        <TodoStats />
        <TodoFilters />

        <p className="section-label">tarefas</p>
        <TodoList />
      </div>
    </div>
  );
}
