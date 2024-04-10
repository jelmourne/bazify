import ProductCard from "@/components/ProductCard";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

interface ProductLayoutProps {
  title: string;
}

function ProductLayout({ title }: ProductLayoutProps) {
  return (
    <div className="flex flex-col items-between">
      <h1 className="font-bold text-2xl my-5">
        {capitalizeFirstLetter(title)}
      </h1>
      <div className="flex gap-6 w-full">
        <ProductCard
          title={"Chair"}
          rating={4}
          count={23}
          price={"19.99"}
          img={
            "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202337/0021/open-box-mid-century-upholstered-dining-chair-wood-legs-o.jpg"
          }
          id={"1"}
        />
      </div>
    </div>
  );
}

export default ProductLayout;
