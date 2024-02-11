import { useState } from 'react';
import { useGetPostsQuery } from '@webpack-nx-mehrzweck/data';
import useCounterActions from 'packages/data/src/hooks/useCounterActions';

import './app.module.css';

export default function Test() {
  const {
    handleDecrement, handleIncrement, handleIncrementByAmount, counterState,
  } = useCounterActions();

  const { data = [], isLoading: isFetching } = useGetPostsQuery(undefined, {
    pollingInterval: 50000,
  });

  const [ test, setTest ] = useState(0);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ todos, setTodos ] = useState<{ userId: number, id: number, title: string, completed: boolean }[]>([]);

  const getTodos = async () => {
    setIsLoading(true);
    setTest(0);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const allTodos = await response.json() as { userId: number, id: number, title: string, completed: boolean }[];

    setTodos(allTodos || []);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="px-[400px] bg-red-500 lg:bg-blue-500 md:bg-green-500 sm:bg-yellow-500">
      {isFetching ? <h1>Loading...</h1>
        : (
          <div>
            <h1>Posts</h1>
            <ul>
              {data.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        )}
      <h1>Welcome to container! {counterState.value}</h1>
      <button onClick={() => setTest((oldTest) => oldTest + 1)}>Click me {test}</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => handleIncrementByAmount(5)}>Increment by 5</button>
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
