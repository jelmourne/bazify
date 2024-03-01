import { useState } from "react";
import { transformPercentage } from "../utils/transfromPercentage";

function ProductStars(props: { rating: number }) {
  const [percentageRating] = useState(transformPercentage(props.rating));
  return (
    <>
      <div
        style={{ width: percentageRating + "%" }}
        className="bg-clip-text bg-black text-transparent text-xl flex select-none"
      >
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
