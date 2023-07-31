import { PATHS } from 'consts';
import React from 'react';
import { Link } from 'react-router-dom';

export const HomeView: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl">Welcome!!!</h1>
      <br />
      <h1 className="text-xl">
        To see documents&nbsp;
        <Link
          to={PATHS.DOCUMENTS_LIST}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click here!!!
        </Link>
      </h1>
    </div>
  );
};
