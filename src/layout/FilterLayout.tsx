import { useState } from "react";
import FilterModal from "../components/FilterModal";

function FilterLayout() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative">
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
        <div className="aspect-square fixed w-full h-full left-0 top-0 flex flex-col justify-center items-center backdrop-blur-sm backdrop-brightness-50">
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img className="filter invert-[95%]" src="./close.svg"></img>
          </button>
          <FilterModal />
        </div>
      )}
    </div>
  );
}

export default FilterLayout;
