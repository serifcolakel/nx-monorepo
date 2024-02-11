import React from 'react';

import ReduxProvider from './ReduxProvider';

export type ProvidersProps = {
  children: React.ReactNode
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider>
      {children}
    </ReduxProvider>
  );
}
