import { object } from "zod";

interface SmallProductCardProps {
  title: string;
  price: string;
  qty: number;
  img: string;
  options: Array<object>;
}

function SmallProductCard({
  title,
  price,
  qty,
  img,
  options,
}: SmallProductCardProps) {
  return (
    <div className="bg-neutral-100 rounded-md flex p-2">
      <img
        className="aspect-square object-cover w-20 rounded-md me-5"
        src={img}
      ></img>
      <div className="flex flex-col">
        <p className="font-semibold">{title}</p>
        <div className="flex gap-1 text-black/50">
          <p>Quantity: {qty}</p>
          <span>@</span>
          <p>${price}</p>
        </div>
        <div className="flex gap-2 text-black/50">
          {options &&
            options.map((e, i) => {
              return (
                <p className="flex" key={i}>
                  {e.key}
                  <span className="me-1">:</span>
                  {e.value}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SmallProductCard;
