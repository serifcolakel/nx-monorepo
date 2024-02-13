import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import Providers from 'packages/data/src/providers';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
