import { useEffect, useState } from 'react';

export default function Test() {
  const [ test, setTest ] = useState(0);
  const [ todos, setTodos ] = useState<{ userId: number, id: number, title: string, completed: boolean }[]>([]);

  const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json() as { userId: number, id: number, title: string, completed: boolean }[];

    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Test From Base Module</h1>
      <button onClick={() => setTest((oldTest) => oldTest + 1)}>Click me {test}</button>
      <div>
        <h2>Todo List</h2>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
