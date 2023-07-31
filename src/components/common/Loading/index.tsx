import React from 'react';

export const LoadingComponent: React.FC = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="w-12 h-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};
