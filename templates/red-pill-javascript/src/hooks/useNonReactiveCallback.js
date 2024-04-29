import { useCallback, useEffect, useRef } from "react";

export function useNonReactiveCallback(fn) {
  const ref = useRef(fn);

  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback(
    (...args) => {
      const latestFn = ref.current;
      return latestFn(...args);
    },
    [ref]
  );
}
