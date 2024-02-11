import CounterActions from './components/CounterActions';
import PostList from './components/PostList';
import TodoList from './components/TodoList';

import './app.module.css';

export default function Test() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="p-4 bg-red-500 lg:bg-blue-500 md:bg-green-500 sm:bg-yellow-500">
        <PostList />
      </div>
      <div className="w-full p-4 bg-red-500 lg:bg-blue-500 md:bg-green-500 sm:bg-yellow-500">
        <CounterActions />
      </div>
      <div className="w-full p-4 bg-red-500 lg:bg-blue-500 md:bg-green-500 sm:bg-yellow-500">
        <TodoList />
      </div>

    </div>
  );
}
