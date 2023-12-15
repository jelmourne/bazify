import { useState } from "react";

function FilterLayout() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div
        className="bg-black rounded-full aspect-square p-6 flex items-center justify-center"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img
          className="fiter invert-[95%] absolute aspect-square w-5"
          src="./filter.svg"
        ></img>
      </div>
      {open && (
        <div className="aspect-square bg-black absolute top-1/2">
          dsadasdasda
        </div>
      )}
    </div>
  );
}

export default FilterLayout;
