import { useCallback, useEffect, useState } from "react";

function useCarousel(length: number) {
  const [elem, setElem] = useState(0);

  const changeImage = useCallback(async () => {
    setElem(elem == length ? 0 : elem + 1);
  }, [setElem, elem, length]);

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [changeImage]);
  return { elem, setElem };
}

export default useCarousel;
