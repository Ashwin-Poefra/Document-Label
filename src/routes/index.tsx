import { PATHS } from 'consts';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from 'pages';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<HomePage />} />
        <Route path={PATHS.NOTFOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
