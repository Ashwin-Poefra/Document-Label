import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

export const ContentComponent: React.FC<ContentProps> = ({ children }) => {
  return <div className="p-6">{children}</div>;
};
