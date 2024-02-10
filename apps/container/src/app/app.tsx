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
