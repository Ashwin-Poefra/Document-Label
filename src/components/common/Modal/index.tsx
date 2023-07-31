import React from 'react';
import { ContentComponent } from './Content';
import { FooterComponent } from './Footer';
import { HeaderComponent } from './Header';

interface ModalProps {
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full flex items-center justify-center bg-opacity-75 bg-gray-700">
      <div className="relative w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Modal = {
  Component: ModalComponent,
  Header: HeaderComponent,
  Content: ContentComponent,
  Footer: FooterComponent,
};
