import ProductStars from "../components/ProductStars";
import ProductVerified from "../components/ProductVerified";

function ProductLayout(props: { image: string; rating: number }) {
  return (
    <div className="flex flex-col w-80 justify-center border p-2 m-3">
      <ProductVerified src={props.image} />
      <p className="text-center">Product Name</p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <ProductStars rating={props.rating} />
          <p>2000</p>
        </div>
        <p>$19.99</p>
      </div>
    </div>
  );
}

export default ProductLayout;
