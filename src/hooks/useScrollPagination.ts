import { useCallback, useRef } from 'react';

export const useScrollPagination = (
  callback: () => void,
  loading: boolean,
  isNextPage: boolean,
) => {
  const observerRef = useRef<IntersectionObserver>();

  const refLastBlock = useCallback(
    (node: HTMLDivElement | HTMLTableRowElement | null) => {
      if (loading) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && isNextPage) {
          callback();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, isNextPage],
  );

  return refLastBlock;
};
