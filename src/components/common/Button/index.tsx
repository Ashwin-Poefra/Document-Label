import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCancel?: boolean;
  children: React.ReactNode;
}

const defaultProps: Pick<ButtonProps, 'isCancel'> = {
  isCancel: false,
};

export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const { isCancel, children, ...rest } = {
    ...defaultProps,
    ...props,
  };

  return (
    <button
      type="button"
      className={
        isCancel
          ? 'text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
          : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      }
      {...rest}
    >
      {children}
    </button>
  );
};
