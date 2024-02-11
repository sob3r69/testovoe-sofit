import { useEffect, useRef } from 'react';

const useCanvas = (draw: (context: CanvasRenderingContext2D) => void) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
  }, [draw]);
  return ref;
};

export default useCanvas;
