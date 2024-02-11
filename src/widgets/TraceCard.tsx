import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import Canvas from './Canvas';
import { drawCircle, drawRect, drawTimeStamp, drawVehicleRect } from '@/lib/utils';
import TraceInfo from './TraceInfo';
import { Trace } from '@/types';

type Props = {
  data: Trace;
  img: string;
};

const TraceCard = ({ data, img }: Props) => {
  const image = new Image();
  image.src = img;
  const [display, setDisplay] = useState(false);
  const [selectedChecks, setSelectedChecks] = useState<string[]>([]);

  // Так как эти размеры будут использоваться часто, вынес их в отдельный объект
  const size = {
    width: 1434,
    height: 1200,
  };

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

  const draw = (context: CanvasRenderingContext2D) => {
    context.drawImage(image, 0, 0, size.width, size.height);

    data.history.tracks[0].points.forEach((point) => {
      point.detection_state.local_timestamp;
      selectedChecks.includes('detect_state_timestamp') &&
        drawTimeStamp(
          context,
          point.detection_state.local_timestamp,
          'white',
          point.plate.center,
          size
        );

      selectedChecks.includes('center') &&
        drawCircle(
          context,
          3,
          'red',
          point.plate.center.y * size.height,
          point.plate.center.x * size.width
        );
      selectedChecks.includes('plate_region') &&
        drawRect(
          context,
          point.plate.region.lt,
          point.plate.region.rb,
          point.plate.region.rt,
          point.plate.region.lb,
          size
        );
      selectedChecks.includes('vehicle_region') &&
        drawVehicleRect(
          context,
          point.vehicle_region.lt,
          point.vehicle_region.rt,
          point.vehicle_region.rb,
          point.vehicle_region.lb,
          size
        );
    });
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger onClick={() => setDisplay(!display)}>{data.uuid}</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-2">
            <Canvas height={size.height} width={size.width} draw={draw} />
            <Card>
              <CardHeader>
                <CardContent>
                  <TraceInfo data={data} />
                  {checks.map(({ id, label }) => (
                    <div key={id} className="flex items-center space-x-2 mt-2">
                      <Checkbox
                        id={id}
                        onCheckedChange={(checked) =>
                          checked
                            ? setSelectedChecks((prev) => [...prev, id])
                            : setSelectedChecks((prev) => prev.filter((prev) => prev !== id))
                        }
                      />
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
