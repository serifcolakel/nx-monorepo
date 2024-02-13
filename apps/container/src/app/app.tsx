import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Data, useCounterActions } from '@webpack-nx-mehrzweck/data';
import { Button } from '@webpack-nx-mehrzweck/ui';
import { useGetPostQuery } from 'packages/data/src/features/queries/post';

import { DialogDemo } from './Dialog';
import NxWelcome from './nx-welcome';

const Test = React.lazy(() => import('base/Test'));

export function App() {
  const [ test, setTest ] = React.useState(0);

  const {
    handleDecrement, handleIncrement, handleIncrementByAmount, counterState,
  } = useCounterActions();

  const { data } = useGetPostQuery(5, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <React.Suspense fallback={null}>
      <DialogDemo />
      <Test />
      <Data text="Hello" />
      <h1 className="px-4 bg-green-500">Post: {data?.title}</h1>
      <h1>Welcome to container! {counterState.value}</h1>
      <Button>Button</Button>
      <Button size="sm" variant="default">
        Click me
      </Button>
      <button onClick={() => setTest((oldTest) => oldTest + 1)}>Click me {test}</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => handleIncrementByAmount(5)}>Increment by 5</button>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route element={<NxWelcome title="main" />} path="/" />
        <Route element={<NxWelcome title="contact" />} path="/contact" />
      </Routes>
    </React.Suspense>
  );
}

export default App;
