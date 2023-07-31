import React from 'react';
import { HomeView } from 'components';
import { WithLayout } from 'components';

const Home: React.FC = () => {
  return <HomeView />;
};

export const HomePage = WithLayout(Home);
