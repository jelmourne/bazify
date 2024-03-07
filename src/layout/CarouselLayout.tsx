import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CarouselLayoutProps {
  img: Array<string>;
}

function CarouselLayout({ img }: CarouselLayoutProps) {
  return (
    <div className="flex justify-center m-3">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full max-w-[70rem]"
      >
        <CarouselContent>
          {img.map((e, i) => {
            return (
              <CarouselItem key={i}>
                <img
                  className="w-full object-cover aspect-[6/3] rounded-xl"
                  src={e}
                ></img>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="lg:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselLayout;
