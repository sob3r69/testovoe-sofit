import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

import img from '@/data/debug.jpg';
import data from '@/data/trace.json';
import { useEffect, useRef, useState } from 'react';

const TraceCard = () => {
  const image = new Image();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [display, setDisplay] = useState(false);
  image.src = img;
  useEffect(() => {
    image.onload = () => {
      canvasRef.current?.getContext('2d')?.drawImage(image, 0, 0, 1434, 1200);
    };
  }, [display]);

  const checks = [
    {
      id: 'center',
      label: 'Отображение точек распознавания центра ГРЗ (номер ТС)',
    },
    {
      id: 'plate_region',
      label: 'Отображение всех прямоугольных рамок ГРЗ',
    },
    {
      id: 'vehicle_region',
      label: 'Отображение всех границ ТС',
    },
    {
      id: 'detect_state_timestamp',
      label: 'Временные метки',
    },
  ];
  // const center = { x: 0.7943218954248366, y: 0.044677734375 };
  // console.log(data.history.tracks[0].points);

  // const draw = (context: CanvasRenderingContext2D) => {
  //   context.clearRect(0, 0, 1434, 1200);
  //   context.fillStyle = 'grey';
  //   context.fillRect(10, 0, 100, 100);
  // };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger onClick={() => setDisplay(!display)}>{data.uuid}</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-2">
            <canvas id="canvas" ref={canvasRef} width={1434} height={1200} />
            <Card>
              <CardHeader>
                <CardContent>
                  <div>UUID: {data.uuid}</div>
                  <div>Время: {data.timestamp}</div>
                  <div>Класс: {data.history.class}</div>
                  <div>Номер: {data.history.plate}</div>
                  <div>Версия (app): {data.version.tag}</div>
                  <div>Версия (sdk): {data.version.lprsdk}</div>
                  {checks.map(({ id, label }) => (
                    <div key={id} className="flex items-center space-x-2 mt-2">
                      <Checkbox id={id} />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {label}
                      </label>
                    </div>
                  ))}
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TraceCard;
