import { useState } from "react";
import { transformPercentage } from "../utils/transfromPercentage";

function ProductStars(props: { rating: number }) {
  const [percentageRating] = useState(transformPercentage(props.rating));
  return (
    <>
      <div className="bg-clip-text text-yellow-400 bg-neutral-500 text-xl flex select-none ">
        <p>&#11088;</p>
        <p>&#11088;</p>
        <p>&#11088;</p>
        <p>&#11088;</p>
        <p>&#11088;</p>
      </div>
    </>
  );
}

export default ProductStars;
