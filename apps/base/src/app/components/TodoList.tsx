import { useState } from 'react';

export default function TodoList() {
  const [ isLoading, setIsLoading ] = useState(false);

  const [ todos, setTodos ] = useState<
  { userId: number; id: number; title: string; completed: boolean }[]
  >([]);

  const getTodos = async () => {
    setIsLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    const allTodos = (await response.json()) as {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }[];

    setTodos(allTodos || []);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full p-8 bg-gray-100 rounded-lg">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-y-4">
      <button
        className="px-4 py-2 bg-white rounded-md"
        onClick={getTodos}
      >
        Get Todos
      </button>
      <div className="p-4 overflow-y-auto bg-gray-100 rounded-md max-h-96">
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
