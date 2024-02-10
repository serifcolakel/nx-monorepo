import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';

const Test = React.lazy(() => import('base/Test'));

export function App() {
  const [ test, setTest ] = React.useState(0);

  return (
    <React.Suspense fallback={null}>
      <Test />
      <h1>Welcome to container!</h1>
      <button onClick={() => setTest((oldTest) => oldTest + 1)}>Click me {test}</button>
      <ul>
        <li>
          <Link to="/">124124</Link>
        </li>
      </ul>
      <Routes>
        <Route element={<NxWelcome title="container" />} path="/" />
      </Routes>
    </React.Suspense>
  );
}

export default App;
