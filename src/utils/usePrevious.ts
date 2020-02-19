import { useEffect, useRef } from "react";

export const usePrevious = <T>(value: T) => {
  const prevRef = useRef<T>(value);
  useEffect(() => {
    prevRef.current = value;
  });
  return prevRef.current;
};
