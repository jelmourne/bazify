import { useState } from "react";
import SortButton from "../components/SortButton";

function SortLayout() {
  const [open, setOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<string>("Sort By");
  return (
    <div>
      <div className="flex p-3 bg-neutral-200 rounded-full w-fit">
        <img className="me-3" src="./sort.svg"></img>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {select}
        </button>
      </div>
      {open && (
        <ul className="absolute bg-neutral-200 mt-1 rounded-md p-2">
          <SortButton value="Relavent" setSelect={setSelect} />
          <SortButton value="Reting" setSelect={setSelect} />
          <SortButton value="Price: High-Low" setSelect={setSelect} />
          <SortButton value="Price: Low-High" setSelect={setSelect} />
        </ul>
      )}
    </div>
  );
}

export default SortLayout;
