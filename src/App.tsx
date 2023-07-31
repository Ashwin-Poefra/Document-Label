import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { AppRoutes } from 'routes';
import { LoadingProvider } from 'components/common';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <LoadingProvider>
        <AppRoutes />
      </LoadingProvider>
    </Provider>
  );
};
