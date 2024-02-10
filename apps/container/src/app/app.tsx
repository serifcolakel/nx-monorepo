import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">1122222222</Link>
        </li>
      </ul>
      <Routes>
        <Route element={<NxWelcome title="container" />} path="/" />
      </Routes>
    </React.Suspense>
  );
}

export default App;
