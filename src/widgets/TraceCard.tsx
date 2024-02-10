import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const TraceCard = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <div className="h-[1200px] w-[1434px] bg-gray-950"></div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TraceCard;
