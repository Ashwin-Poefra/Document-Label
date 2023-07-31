import { PATHS } from 'consts';
import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderSection: React.FC = () => {
  return (
    <div className="flex flex-col bg-indigo-700 p-4 w-full fixed top-0">
      <Link to={PATHS.HOME} className="text-3xl font-bold text-white">
        Toy Document Labeling Web App
      </Link>
    </div>
  );
};
