import ProductStars from "../components/ProductStars";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  img: string;
  title: string;
  price: string;
  rating: number;
  count: number;
}

function ProductCard({
  id,
  img,
  title,
  price,
  rating,
  count,
}: ProductCardProps) {
  return (
    <Link to={`/product/${id}`}>
      <div className="flex flex-col w-[17.65rem] justify-center p-4 shadow-xl rounded-md border">
        <img className="aspect-square object-cover" src={img}></img>
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start">
            <p className="text-2xl font-semibold">{title}</p>
            <p>{`$ ${price}`}</p>
          </div>
          <div className="flex flex-col">
            <ProductStars rating={rating} />
            <p>{count}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
