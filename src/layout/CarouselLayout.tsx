import useCarousel from "../hooks/useCarousel";

function CarouselLayout(props: { images: Array<string> }) {
  const length = props.images.length - 1;
  const { elem, setElem } = useCarousel(length);

  return (
    <div className="flex relative justify-center">
      <img className="h-96 w-full" src={props.images[elem]}></img>
      <div className="absolute bottom-0">
        {props.images.map((_value, index) => (
          <button
            key={index}
            className="bg-neutral-400 rounded-full h-3 aspect-square m-2"
            onClick={() => {
              setElem(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CarouselLayout;
