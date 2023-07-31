import React from 'react';

interface FooterProps {
  children: React.ReactNode;
}

export const FooterComponent: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
      {children}
    </div>
  );
};
