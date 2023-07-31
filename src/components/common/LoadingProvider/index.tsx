import React, { useMemo } from 'react';
import { useAppSelector } from 'store';
import { LoadingComponent } from '../Loading';

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const { loadings } = useAppSelector(({ loading }) => loading);

  const isLoading = useMemo(() => {
    return !!loadings.length;
  }, [loadings]);

  return (
    <>
      {children}
      {isLoading && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50">
          <LoadingComponent />
        </div>
      )}
    </>
  );
};
