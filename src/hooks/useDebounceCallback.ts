import { useEffect } from 'react';

function useDebounceCallback(value: string, delay: number, callback: (value: string) => void) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      callback(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
}
export default useDebounceCallback;
