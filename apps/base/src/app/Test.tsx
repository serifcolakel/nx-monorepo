import { useState } from 'react';

import './app.module.css';

export default function Test() {
  const [ test, setTest ] = useState(0);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ todos, setTodos ] = useState<{ userId: number, id: number, title: string, completed: boolean }[]>([]);

  const getTodos = async () => {
    setIsLoading(true);
    setTest(0);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json() as { userId: number, id: number, title: string, completed: boolean }[];

    setTodos(data || []);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Test From Base Module</h1>
      <button onClick={() => setTest((oldTest) => oldTest - 1)}>Click me {test}</button>
      <button onClick={() => setTest((oldTest) => oldTest + 1)}>Click me {test}</button>
      <button onClick={() => getTodos()}>Get Todos</button>
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.slice(0, test).map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
