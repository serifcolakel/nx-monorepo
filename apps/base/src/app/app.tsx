import { useCounterActions, useGetPostQuery } from '@webpack-nx-mehrzweck/data';
import { Button, Label } from '@webpack-nx-mehrzweck/ui';

import PostList from './components/PostList';
import NxWelcome from './nx-welcome';

export function App() {
  const {
    handleDecrement, handleIncrement, handleIncrementByAmount, counterState,
  } = useCounterActions();

  const { data } = useGetPostQuery(5, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-4 overflow-y-auto gap-y-4">
      <div className="w-full p-4 bg-red-500 lg:bg-blue-500 md:bg-green-500 sm:bg-yellow-500">
        <PostList />
      </div>
      <NxWelcome title="base" />
      <Label className="px-4 bg-green-500">Post: {data?.title}</Label>
      <Label>Welcome to container! {counterState.value}</Label>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
      <Button onClick={() => handleIncrementByAmount(5)}>Increment by 5</Button>
    </div>
  );
}

export default App;
