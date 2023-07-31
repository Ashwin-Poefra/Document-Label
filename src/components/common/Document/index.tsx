import { PATHS } from 'consts';
import React from 'react';
import { Link } from 'react-router-dom';
import { Document } from 'types';

interface DocumentProps {
  index: number;
  isOdd?: boolean;
  document: Document;
}

const defaultProps: Pick<DocumentProps, 'isOdd'> = {
  isOdd: true,
};

export const DocumentComponent: React.FC<DocumentProps> = (props) => {
  const { index, document, isOdd } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Link
      className={`flex w-full rounded-md ${
        isOdd ? 'bg-white' : 'bg-gray-300'
      } shadow-md shadow-gray-500 text-lg p-4 hover:bg-slate-400 cursor-pointer`}
      to={`${PATHS.DOCUMENTS_LIST}/${document.id}`}
    >
      <strong className="w-8 text-right">{index}.</strong>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <h2 className="flex-auto">{document.title}</h2>
      <div
        onClick={(event) => {
          event.preventDefault();
          window.open(document.url);
        }}
      >
        Open
      </div>
    </Link>
  );
};
