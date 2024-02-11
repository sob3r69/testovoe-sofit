import { useEffect, useRef } from 'react';

type Props = {
  width: number;
  height: number;
  draw: (context: CanvasRenderingContext2D) => void;
};

// Вынес в отдельный компонент, чтобы избежать проблемы с потенциальным null у canvasRef
const Canvas = ({ width, height, draw }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    draw(canvasRef.current!.getContext('2d')!);
  }, [draw]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
