import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import TanStackQueryProvider from 'packages/data/src/providers/TanStackQueryProvider';

import Test from './app/Test';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <TanStackQueryProvider>
      <BrowserRouter>
        <Test />
      </BrowserRouter>
    </TanStackQueryProvider>
  </StrictMode>,
);
