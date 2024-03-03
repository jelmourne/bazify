import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function CarouselLayout() {
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
          <CarouselItem>
            <img
              className="w-full object-cover aspect-[6/3] rounded-xl"
              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1709320992~exp=1709321592~hmac=5e97fd2c557327bb17b2366266d6d4b2317bc4f28bc60d700625d82caeb73c03"
            ></img>
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full object-cover aspect-[6/3] rounded-xl"
              src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></img>
          </CarouselItem>
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
