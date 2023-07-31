import React from 'react';
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
    <div
      className={`flex w-full rounded-md ${
        isOdd ? 'bg-white' : 'bg-gray-300'
      } shadow-md shadow-gray-500 text-lg p-4 hover:bg-slate-400 cursor-pointer`}
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
    </div>
  );
};
