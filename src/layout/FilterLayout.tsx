import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import data from "../config/Counties.json";

interface FilterLayoutProps {
  showCategories: boolean;
}

function FilterLayout({ showCategories = true }: FilterLayoutProps) {
  return (
    <Accordion type="single" className="w-96 m-10" collapsible>
      <AccordionItem
        className="flex flex-1 items-center justify-between py-4 font-medium transition-all"
        value="item-1"
      >
        <label>Verfied</label>
        <input type="checkbox" />
      </AccordionItem>
      {showCategories ? (
        <AccordionItem value="item-2">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            {data.categories.map((e, i) => {
              return (
                <p
                  className="text-black/60 font-semibold cursor-pointer hover:text-black/80"
                  key={i}
                >
                  {e.title}
                </p>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      ) : (
        ""
      )}
      <AccordionItem value="item-3">
        <AccordionTrigger>Type</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Price</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Rating</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Color</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>Size</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FilterLayout;
