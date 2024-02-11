import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function drawCircle(
  context: CanvasRenderingContext2D,
  thickness: number,
  color: string,
  y: number,
  x: number
) {
  context.beginPath();
  context.arc(x, y, thickness, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
}

export function drawRect(
  context: CanvasRenderingContext2D,
  lt: { x: number; y: number },
  rb: { x: number; y: number },
  rt: { x: number; y: number },
  lb: { x: number; y: number },
  size: { width: number; height: number }
) {
  context.beginPath();
  context.moveTo(lt.x * size.width, lt.y * size.height);
  context.lineTo(rt.x * size.width, rt.y * size.height);
  context.lineTo(rb.x * size.width, rb.y * size.height);
  context.lineTo(lb.x * size.width, lb.y * size.height);
  context.lineTo(lt.x * size.width, lt.y * size.height);
  context.lineWidth = 1;
  context.strokeStyle = 'cyan';
  context.stroke();
}

// Значения rt и rb судя по всему перепутаны местами
export function drawVehicleRect(
  context: CanvasRenderingContext2D,
  lt: { x: number; y: number },
  rb: { x: number; y: number },
  rt: { x: number; y: number },
  lb: { x: number; y: number },
  size: { width: number; height: number }
) {
  context.beginPath();
  context.moveTo(lt.x * size.width, lt.y * size.height);
  context.lineTo(lb.x * size.width, lb.y * size.height);
  context.lineTo(rt.x * size.width, rt.y * size.height);
  context.lineTo(rb.x * size.width, rb.y * size.height);
  context.lineTo(lt.x * size.width, lt.y * size.height);
  context.lineWidth = 1;
  context.strokeStyle = 'orange';
  context.stroke();
}

export function drawTimeStamp(
  context: CanvasRenderingContext2D,
  text: string,
  color: string,
  position: { x: number; y: number },
  size: { width: number; height: number }
) {
  context.font = '12px serif';
  context.fillStyle = color;
  context.fillText(text, position.x * size.width, position.y * size.height, 1000);
}
