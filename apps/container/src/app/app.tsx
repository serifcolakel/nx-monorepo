import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Data, useCounterActions } from '@webpack-nx-mehrzweck/data';

import NxWelcome from './nx-welcome';

const Test = React.lazy(() => import('base/Test'));

export function App() {
  const [ test, setTest ] = React.useState(0);

  const {
    handleDecrement, handleIncrement, handleIncrementByAmount, counterState,
  } = useCounterActions();

  return (
    <React.Suspense fallback={null}>
      <Test />
      <Data text="123" />
      <h1>Welcome to container! {counterState.value}</h1>
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
